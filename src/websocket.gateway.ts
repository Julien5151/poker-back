import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { WebSocket, WebSocketServer as WsServer } from 'ws';
import { RoomService } from './room.service';
import { MessageType } from './shared/enums';
import { RoomMessage, User } from './shared/interfaces';

@WebSocketGateway({
  path: '/web_socket',
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: WsServer;
  private connectedClients = new Map<WebSocket, string>();

  constructor(private readonly roomService: RoomService) {
    console.log('instanciation du websocket gateway');
  }

  async handleConnection(clientWs: WebSocket): Promise<void> {
    const newUserName = `Philippe_${Math.floor(Math.random() * 100000)}`;
    this.connectedClients.set(clientWs, newUserName);
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.addUser(newUserName),
    });
  }

  async handleDisconnect(clientWs: WebSocket): Promise<void> {
    const disconnectedUsername = this.connectedClients.get(clientWs);
    this.connectedClients.delete(clientWs);
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.removeUser(disconnectedUsername),
    });
  }

  @SubscribeMessage(MessageType.UsersUpdate)
  handleUserUpdate(@MessageBody() updatedUser: User): void {
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUser(updatedUser),
    });
  }

  @SubscribeMessage(MessageType.HiddenUpdate)
  handleEvent(@MessageBody() isHidden: boolean): void {
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.updateHidden(isHidden),
    });
  }

  private broadcastRoomMessage(wsMessage: RoomMessage): void {
    this.server.clients.forEach((clientWs) => {
      clientWs.send(JSON.stringify(wsMessage));
    });
  }
}
