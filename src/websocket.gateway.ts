import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { WebSocket, WebSocketServer as WsServer } from 'ws';
import { MessageType } from './shared/enums';
import { RoomMessage, RoomState, User } from './shared/interfaces';

@WebSocketGateway({
  path: '/start_web_socket',
  cors: {
    origin: '*',
  },
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: WsServer;

  private roomState: RoomState = {
    users: [],
    isHidden: true,
  };
  private connectedClients = new Map<WebSocket, string>();

  async handleConnection(clientWs: WebSocket) {
    const userName = `Philippe_${Math.random()}`;
    this.connectedClients.set(clientWs, userName);
    this.roomState.users = [
      ...this.roomState.users,
      { name: userName, vote: null },
    ];
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomState,
    });
  }
  async handleDisconnect(clientWs: WebSocket) {
    const disconnectedUsername = this.connectedClients.get(clientWs);
    this.roomState.users = this.roomState.users.filter(
      (user) => user.name !== disconnectedUsername,
    );
    this.connectedClients.delete(clientWs);
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomState,
    });
  }

  @SubscribeMessage('users_update')
  handleEvent(@MessageBody() data: User): void {
    console.log(data);
  }

  private broadcastRoomMessage(wsMessage: RoomMessage): void {
    this.server.clients.forEach((clientWs) => {
      clientWs.send(JSON.stringify(wsMessage));
    });
  }
}
