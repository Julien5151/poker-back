import { Injectable } from '@nestjs/common';
import { MessageType } from 'src/shared/enums';
import { PingMessage, RoomMessage } from 'src/shared/interfaces';
import { WebSocket } from 'ws';

@Injectable()
export class BroadcastService {
  private connectedClients = new Map<WebSocket, string>();
  private intervalId: NodeJS.Timer;
  private readonly PING_INTERVAL = 30000;

  public addConnectedClient(clientWs: WebSocket, clientId: string): void {
    this.connectedClients.set(clientWs, clientId);
  }

  public removeConnectedClient(clientWs: WebSocket): void {
    this.connectedClients.delete(clientWs);
  }

  public getClientId(clientWs: WebSocket): string {
    return this.connectedClients.get(clientWs);
  }

  public broadcastRoomMessage(wsMessage: RoomMessage | PingMessage): void {
    try {
      const stringifiedMessage = JSON.stringify(wsMessage);
      this.connectedClients.forEach((clientId, clientWs) => {
        clientWs.send(stringifiedMessage);
      });
      // Rest ping interval after each message sent
      this.resetPing();
    } catch (error) {
      console.log(error);
      console.error('Failed to stringify websocket message before sending it');
    }
  }

  private resetPing(): void {
    if (this.intervalId) globalThis.clearInterval(this.intervalId);
    this.intervalId = globalThis.setInterval(() => {
      this.broadcastRoomMessage({ event: MessageType.Ping });
    }, this.PING_INTERVAL);
  }
}
