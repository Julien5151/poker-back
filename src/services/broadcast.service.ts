import { Injectable } from '@nestjs/common';
import { Room } from 'src/interfaces/room.interface';
import { MessageType } from 'src/shared/enums/message-type.enum';
import { RoomState } from 'src/shared/interfaces/room-state.interface';
import {
  PingMessage,
  RoomMessage,
} from 'src/shared/interfaces/ws-message.interface';
import { RoomName } from 'src/shared/types/room-name.type';
import { UserId } from 'src/shared/types/user-id.type';
import { WebSocket } from 'ws';
import { RoomService } from './room.service';
import { UserService } from './user.service';

@Injectable()
export class BroadcastService {
  private connectedClients = new Map<UserId, WebSocket>();
  private readonly PING_INTERVAL = 30000;

  constructor(
    private readonly roomService: RoomService,
    private readonly userService: UserService,
  ) {}

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
    return [...this.connectedClients.entries()].find(
      ([, ws]) => ws === websocket,
    )?.[0];
  }

  private broadcastToRoom(
    name: RoomName,
    wsMessage: RoomMessage | PingMessage,
  ): void {
    try {
      const stringifiedMessage = JSON.stringify(wsMessage);
      const userIds = this.roomService.getUserIds(name);
      const clientWebSockets = [...this.connectedClients.entries()]
        .filter(([userId]) => userIds.includes(userId))
        .map(([, webSocket]) => webSocket);
      clientWebSockets.forEach((ws) => {
        ws.send(stringifiedMessage);
      });
    } catch (error) {
      console.error('Failed to stringify websocket message before sending it');
    }
  }

  public broadcastRoomUpdate(roomName: RoomName): void {
    const room = this.roomService.get(roomName);
    if (room) {
      const { name, isHidden } = room;
      const roomUsers = room.userIds.map((userId) =>
        this.userService.get(userId),
      );
      const roomStateMessage: RoomState = {
        name,
        users: roomUsers,
        isHidden,
      };
      this.broadcastToRoom(name, {
        event: MessageType.RoomUpdate,
        data: roomStateMessage,
      });
      this.resetRoomPingBroadcast(room);
    } else {
      console.error('Room not found');
    }
  }

  private resetRoomPingBroadcast(room: Room): void {
    if (room.intervalId) globalThis.clearInterval(room.intervalId);
    room.intervalId = globalThis.setInterval(() => {
      this.broadcastToRoom(room.name, { event: MessageType.Ping });
    }, this.PING_INTERVAL);
  }
}
