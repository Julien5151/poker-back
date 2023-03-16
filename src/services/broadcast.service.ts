import { Injectable } from '@nestjs/common';
import { RoomMessage } from 'src/shared/interfaces';
import { WebSocket } from 'ws';

@Injectable()
export class BroadcastService {
  private connectedClients = new Map<WebSocket, string>();

  public addConnectedClient(clientWs: WebSocket, clientId: string): void {
    this.connectedClients.set(clientWs, clientId);
  }

  public removeConnectedClient(clientWs: WebSocket): void {
    this.connectedClients.delete(clientWs);
  }

  public getClientId(clientWs: WebSocket): string {
    return this.connectedClients.get(clientWs);
  }

  public broadcastRoomMessage(wsMessage: RoomMessage): void {
    try {
      const stringifiedMessage = JSON.stringify(wsMessage);
      this.connectedClients.forEach((clientId, clientWs) => {
        clientWs.send(stringifiedMessage);
      });
    } catch (error) {
      console.log(error);
      console.error('Failed to stringify websocket message before sending it');
    }
  }
}
