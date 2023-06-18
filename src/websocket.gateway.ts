import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { WebSocket } from 'ws';
import { PokerService } from './services/poker.service';
import { MessageType } from './shared/enums/message-type.enum';
import { VoteValue } from './shared/enums/vote-value.enum';

@WebSocketGateway({
  path: '/web_socket',
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly pokerService: PokerService) {}

  async handleConnection(clientWs: WebSocket): Promise<void> {
    this.pokerService.connectNewUser(clientWs);
  }

  async handleDisconnect(clientWs: WebSocket): Promise<void> {
    this.pokerService.disconnectUser(clientWs);
  }

  @SubscribeMessage(MessageType.UserVoteUpdate)
  handleUserVoteUpdate(
    @MessageBody() vote: VoteValue,
    @ConnectedSocket() client: WebSocket,
  ): void {
    const updatedUserId =
      this.broadcastService.getClientUserBoundIds(client).userId;
    this.broadcastService.broadcastMessage(client, {
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUserVote(this.roomId, updatedUserId, vote),
    });
  }

  @SubscribeMessage(MessageType.UserNameUpdate)
  handleUserNameUpdate(
    @MessageBody() name: string,
    @ConnectedSocket() client: WebSocket,
  ): void {
    const updatedUserId =
      this.broadcastService.getClientUserBoundIds(client).userId;
    this.broadcastService.broadcastMessage(client, {
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUserName(this.roomId, updatedUserId, name),
    });
  }

  @SubscribeMessage(MessageType.UserEffectUpdate)
  handleUserEffectUpdate(
    @MessageBody() effect: UserEffect,
    @ConnectedSocket() client: WebSocket,
  ): void {
    const updatedUserId =
      this.broadcastService.getClientUserBoundIds(client).userId;
    this.broadcastService.broadcastMessage(client, {
      event: MessageType.RoomUpdate,
      data: this.roomService.updateUserEffect(
        this.roomId,
        updatedUserId,
        effect,
      ),
    });
    setTimeout(() => {
      this.broadcastService.broadcastMessage(client, {
        event: MessageType.RoomUpdate,
        data: this.roomService.updateUserEffect(
          this.roomId,
          updatedUserId,
          null,
        ),
      });
    }, 1500);
  }

  @SubscribeMessage(MessageType.HiddenUpdate)
  handleHiddenUpdate(@ConnectedSocket() client: WebSocket): void {
    const roomId = this.broadcastService.getClientUserBoundIds(client).roomId;
    this.broadcastService.broadcastMessage(client, {
      event: MessageType.RoomUpdate,
      data: this.roomService.toggleHidden(roomId),
    });
  }

  @SubscribeMessage(MessageType.ResetVotes)
  handleResetVotes(@ConnectedSocket() client: WebSocket): void {
    const roomId = this.broadcastService.getClientUserBoundIds(client).roomId;
    this.broadcastService.broadcastMessage(client, {
      event: MessageType.RoomUpdate,
      data: this.roomService.resetVotes(roomId),
    });
  }
}
