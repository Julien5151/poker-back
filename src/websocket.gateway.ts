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
import { UserEffect } from './shared/enums/user-effect.enum';
import { VoteValue } from './shared/enums/vote-value.enum';

@WebSocketGateway({
  path: '/web_socket',
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly pokerService: PokerService) {}

  async handleConnection(clientWs: WebSocket): Promise<void> {
    this.pokerService.handleNewUserConnection(clientWs);
  }

  async handleDisconnect(clientWs: WebSocket): Promise<void> {
    this.pokerService.handleUserDisconnection(clientWs);
  }

  @SubscribeMessage(MessageType.UserJoinRoom)
  handleUserJoinRoom(
    @MessageBody() roomName: string,
    @ConnectedSocket() client: WebSocket,
  ): void {
    this.pokerService.handleUserJoinRoom(roomName, client);
  }

  @SubscribeMessage(MessageType.UserVoteUpdate)
  handleUserVoteUpdate(
    @MessageBody() vote: VoteValue,
    @ConnectedSocket() client: WebSocket,
  ): void {
    this.pokerService.handleUserVoteUpdate(vote, client);
  }

  @SubscribeMessage(MessageType.UserNameUpdate)
  handleUserNameUpdate(
    @MessageBody() name: string,
    @ConnectedSocket() client: WebSocket,
  ): void {
    this.pokerService.handleUserNameUpdate(name, client);
  }

  @SubscribeMessage(MessageType.UserEffectUpdate)
  handleUserEffectUpdate(
    @MessageBody() effect: UserEffect,
    @ConnectedSocket() client: WebSocket,
  ): void {
    this.pokerService.handleUserEffectUpdate(effect, client);
    setTimeout(() => {
      this.pokerService.handleUserEffectUpdate(null, client);
    }, 1500);
  }

  @SubscribeMessage(MessageType.HiddenUpdate)
  handleHiddenUpdate(@ConnectedSocket() client: WebSocket): void {
    this.pokerService.handleHiddenUpdate(client);
  }

  @SubscribeMessage(MessageType.ResetVotes)
  handleResetVotes(@ConnectedSocket() client: WebSocket): void {
    this.pokerService.handleResetVotes(client);
  }
}
