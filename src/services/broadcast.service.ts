import { Injectable } from '@nestjs/common';
import { MessageType } from 'src/shared/enums/message-type.enum';
import { RoomId } from 'src/shared/interfaces/room.interface';
import { UserId } from 'src/shared/interfaces/user.interface';
import {
  PingMessage,
  RoomMessage,
} from 'src/shared/interfaces/ws-message.interface';
import { WebSocket } from 'ws';
import { RoomService } from './room.service';

@Injectable()
export class BroadcastService {
  private connectedClients = new Map<UserId, WebSocket>();
  private readonly PING_INTERVAL = 30000;

  constructor(private readonly roomService: RoomService) {}

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

  public broadcastToRoom(
    id: RoomId,
    wsMessage: RoomMessage | PingMessage,
  ): void {
    try {
      const stringifiedMessage = JSON.stringify(wsMessage);
      const userIds = this.roomService.getUserIds(id);
      const clientWebSockets = [...this.connectedClients.entries()]
        .filter(([userId]) => userIds.includes(userId))
        .map(([, webSocket]) => webSocket);
      clientWebSockets.forEach((ws) => {
        ws.send(stringifiedMessage);
      });
      // Reset ping interval after each message sent
      this.resetPing(id);
    } catch (error) {
      console.error('Failed to stringify websocket message before sending it');
    }
  }

  private resetPing(roomId: RoomId): void {
    const room = this.roomService.get(roomId);
    if (room.intervalId) globalThis.clearInterval(room.intervalId);
    room.intervalId = globalThis.setInterval(() => {
      this.broadcastToRoom(roomId, { event: MessageType.Ping });
    }, this.PING_INTERVAL);
  }
}
