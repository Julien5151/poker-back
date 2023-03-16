import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { v4 as uuidv4 } from 'uuid';
import { WebSocket } from 'ws';
import { BroadcastService } from './services/broadcast.service';
import { RoomService } from './services/room.service';
import { MessageType, UserEffect, VoteValue } from './shared/enums';

@WebSocketGateway({
  path: '/web_socket',
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly roomService: RoomService,
    private readonly broadcastService: BroadcastService,
  ) {}

  async handleConnection(clientWs: WebSocket): Promise<void> {
    const newUserId = uuidv4();
    const newUserName = `Philippe_${Math.floor(Math.random() * 100000)}`;
    this.broadcastService.addConnectedClient(clientWs, newUserId);
    this.broadcastService.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.addUser(newUserId, newUserName),
    });
  }

  async handleDisconnect(clientWs: WebSocket): Promise<void> {
    const disconnectedUserId = this.broadcastService.getClientId(clientWs);
    this.broadcastService.removeConnectedClient(clientWs);
    this.broadcastService.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.removeUser(disconnectedUserId),
    });
  }

  @SubscribeMessage(MessageType.UserVoteUpdate)
  handleUserVoteUpdate(
    @MessageBody() vote: VoteValue,
    @ConnectedSocket() client: WebSocket,
  ): void {
    const updatedUserId = this.broadcastService.getClientId(client);
    this.broadcastService.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUserVote(updatedUserId, vote),
    });
  }

  @SubscribeMessage(MessageType.UserNameUpdate)
  handleUserNameUpdate(
    @MessageBody() name: string,
    @ConnectedSocket() client: WebSocket,
  ): void {
    const updatedUserId = this.broadcastService.getClientId(client);
    this.broadcastService.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUserName(updatedUserId, name),
    });
  }

  @SubscribeMessage(MessageType.UserEffectUpdate)
  handleUserEffectUpdate(
    @MessageBody() effect: UserEffect,
    @ConnectedSocket() client: WebSocket,
  ): void {
    const updatedUserId = this.broadcastService.getClientId(client);
    this.broadcastService.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUserEffect(updatedUserId, effect),
    });
    setTimeout(() => {
      this.broadcastService.broadcastRoomMessage({
        event: MessageType.RoomUpdate,
        data: this.roomService.updateUserEffect(updatedUserId, null),
      });
    }, 1500);
  }

  @SubscribeMessage(MessageType.HiddenUpdate)
  handleHiddenUpdate(): void {
    this.broadcastService.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.toggleHidden(),
    });
  }

  @SubscribeMessage(MessageType.ResetVotes)
  handleResetVotes(): void {
    this.broadcastService.broadcastRoomMessage({
      event: MessageType.RoomUpdate,
      data: this.roomService.resetVotes(),
    });
  }
}
