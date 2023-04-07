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
  // TEMP - only while no multiroom in frontend
  private readonly roomId = uuidv4() as string;

  constructor(
    private readonly roomService: RoomService,
    private readonly broadcastService: BroadcastService,
  ) {
    // TEMP - only while no multiroom in frontend
    this.roomService.createRoom(this.roomId);
  }

  async handleConnection(clientWs: WebSocket): Promise<void> {
    const newUserId = uuidv4() as string;
    const newUserName = `Philippe_${Math.floor(Math.random() * 100000)}`;
    this.broadcastService.addConnectedClient(clientWs, {
      userId: newUserId,
      roomId: this.roomId,
    });
    this.broadcastService.broadcastMessage(clientWs, {
      event: MessageType.RoomUpdate,
      data: this.roomService.addUser(this.roomId, newUserId, newUserName),
    });
  }

  async handleDisconnect(clientWs: WebSocket): Promise<void> {
    const disconnectedUserId =
      this.broadcastService.getClientUserBoundIds(clientWs).userId;
    this.broadcastService.removeConnectedClient(clientWs);
    this.broadcastService.broadcastMessage(clientWs, {
      event: MessageType.RoomUpdate,
      data: this.roomService.removeUser(this.roomId, disconnectedUserId),
    });
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
