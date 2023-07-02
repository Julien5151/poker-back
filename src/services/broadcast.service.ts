import { Injectable } from '@nestjs/common';
import { Room } from 'src/internals/interfaces/room.interface';
import { MessageType } from 'src/shared/enums/message-type.enum';
import { RoomState } from 'src/shared/interfaces/room-state.interface';
import { RoomMessage, UserSuccessfullyConnectedMessage } from 'src/shared/interfaces/ws-message.interface';
import { RoomName } from 'src/shared/types/room-name.type';
import { UserId } from 'src/shared/types/user-id.type';
import { WebSocket } from 'ws';
import { RoomService } from './room.service';
import { UserService } from './user.service';

@Injectable()
export class BroadcastService {
  private connectedClients = new Map<UserId, WebSocket>();
  private readonly PING_INTERVAL = 30000;

  constructor(private readonly roomService: RoomService, private readonly userService: UserService) {}

  public addConnectedClient(userId: UserId, clientWs: WebSocket): void {
    this.connectedClients.set(userId, clientWs);
  }

  public removeConnectedClient(userId: UserId): void {
    this.connectedClients.delete(userId);
  }

  public getWsFromUserId(userId: UserId): WebSocket | undefined {
    return this.connectedClients.get(userId);
  }

  public getUserIdFromWs(websocket: WebSocket): UserId | undefined {
    return [...this.connectedClients.entries()].find(([, ws]) => ws === websocket)?.[0];
  }

  public broadcastToUser(userId: UserId, wsMessage: UserSuccessfullyConnectedMessage): void {
    try {
      const stringifiedMessage = JSON.stringify(wsMessage);
      const ws = this.connectedClients.get(userId);
      ws.send(stringifiedMessage);
    } catch (error) {
      console.error('Failed to stringify user websocket message before sending it');
    }
  }

  public broadcastRoomUpdate(roomName: RoomName): void {
    const room = this.roomService.get(roomName);
    if (room) {
      const { name, isHidden, roomEffect, roomEffectCoolDowns } = room;
      const roomUsers = room.userIds.map((userId) => this.userService.get(userId));
      const roomStateMessage: RoomState = {
        name,
        users: roomUsers,
        isHidden,
        roomEffect,
        roomEffectCoolDowns,
      };
      this.broadcastToRoom(name, {
        event: MessageType.RoomUpdate,
        data: roomStateMessage,
      });
      this.resetRoomPingBroadcast(room);
    } else {
      console.info("No message broadcasted because room doesn't exist anymore");
    }
  }

  private broadcastToRoom(name: RoomName, wsMessage: RoomMessage): void {
    try {
      const stringifiedMessage = JSON.stringify(wsMessage);
      const userIds = this.roomService.getUserIds(name);
      const clientWebSockets = [...this.connectedClients.entries()].filter(([userId]) => userIds.includes(userId)).map(([, webSocket]) => webSocket);
      clientWebSockets.forEach((ws) => {
        ws.send(stringifiedMessage);
      });
    } catch (error) {
      console.error('Failed to stringify room websocket message before sending it');
    }
  }

  private resetRoomPingBroadcast(room: Room): void {
    if (room.intervalId) globalThis.clearInterval(room.intervalId);
    room.intervalId = globalThis.setInterval(() => {
      this.broadcastRoomUpdate(room.name);
    }, this.PING_INTERVAL);
  }
}
