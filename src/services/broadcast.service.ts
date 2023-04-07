import { Injectable } from '@nestjs/common';
import { BoundIds } from 'src/interfaces/bound-ids.interface';
import { MessageType } from 'src/shared/enums';
import { PingMessage, RoomMessage } from 'src/shared/interfaces';
import { WebSocket } from 'ws';
import { RoomService } from './room.service';

@Injectable()
export class BroadcastService {
  private connectedClients = new Map<WebSocket, BoundIds>();
  private readonly PING_INTERVAL = 30000;

  constructor(private readonly roomService: RoomService) {}

  public addConnectedClient(clientWs: WebSocket, boundIds: BoundIds): void {
    this.connectedClients.set(clientWs, boundIds);
  }

  public removeConnectedClient(clientWs: WebSocket): void {
    this.connectedClients.delete(clientWs);
  }

  public getClientUserBoundIds(clientWs: WebSocket): BoundIds {
    return this.connectedClients.get(clientWs);
  }

  public broadcastMessage(
    clientWsOrRoomId: WebSocket | string,
    wsMessage: RoomMessage | PingMessage,
  ): void {
    try {
      const stringifiedMessage = JSON.stringify(wsMessage);
      // Target clients based on websocket or room id
      const roomId =
        clientWsOrRoomId instanceof WebSocket
          ? this.connectedClients.get(clientWsOrRoomId).roomId
          : clientWsOrRoomId;
      const clientsFromRoom = Array.from(this.connectedClients).filter(
        ([, boundIds]) => {
          return boundIds.roomId === roomId;
        },
      );
      clientsFromRoom.forEach(([ws]) => {
        ws.send(stringifiedMessage);
      });
      // Reset ping interval after each message sent
      this.resetPing(roomId);
    } catch (error) {
      console.error('Failed to stringify websocket message before sending it');
    }
  }

  private resetPing(roomId: string): void {
    const room = this.roomService.getRoom(roomId);
    if (room.intervalId) globalThis.clearInterval(room.intervalId);
    room.intervalId = globalThis.setInterval(() => {
      this.broadcastMessage(roomId, { event: MessageType.Ping });
    }, this.PING_INTERVAL);
  }
}
