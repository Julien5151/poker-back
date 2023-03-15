import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { v4 as uuidv4 } from 'uuid';
import { WebSocket, WebSocketServer as WsServer } from 'ws';
import { RoomService } from './room.service';
import { MessageType, UserEffect, VoteValue } from './shared/enums';
import { RoomMessage } from './shared/interfaces';

@WebSocketGateway({
  path: '/web_socket',
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: WsServer;
  private connectedClients = new Map<WebSocket, string>();

  constructor(private readonly roomService: RoomService) {}

  async handleConnection(clientWs: WebSocket): Promise<void> {
    const newUserId = uuidv4();
    const newUserName = `Philippe_${Math.floor(Math.random() * 100000)}`;
    this.connectedClients.set(clientWs, newUserId);
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.addUser(newUserId, newUserName),
    });
  }

  async handleDisconnect(clientWs: WebSocket): Promise<void> {
    const disconnectedUserId = this.connectedClients.get(clientWs);
    this.connectedClients.delete(clientWs);
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.removeUser(disconnectedUserId),
    });
  }

  @SubscribeMessage(MessageType.UserVoteUpdate)
  handleUserVoteUpdate(
    @MessageBody() vote: VoteValue,
    @ConnectedSocket() client: WebSocket,
  ): void {
    const updatedUserId = this.connectedClients.get(client);
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUserVote(updatedUserId, vote),
    });
  }

  @SubscribeMessage(MessageType.UserNameUpdate)
  handleUserNameUpdate(
    @MessageBody() name: string,
    @ConnectedSocket() client: WebSocket,
  ): void {
    const updatedUserId = this.connectedClients.get(client);
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUserName(updatedUserId, name),
    });
  }

  @SubscribeMessage(MessageType.UserEffectUpdate)
  handleUserEffectUpdate(
    @MessageBody() effect: UserEffect,
    @ConnectedSocket() client: WebSocket,
  ): void {
    const updatedUserId = this.connectedClients.get(client);
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUserEffect(updatedUserId, effect),
    });
  }

  @SubscribeMessage(MessageType.HiddenUpdate)
  handleHiddenUpdate(): void {
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.toggleHidden(),
    });
  }

  @SubscribeMessage(MessageType.ResetVotes)
  handleResetVotes(): void {
    this.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.resetVotes(),
    });
  }

  private broadcastRoomMessage(wsMessage: RoomMessage): void {
    this.server.clients.forEach((clientWs) => {
      clientWs.send(JSON.stringify(wsMessage));
    });
  }
}
