import { Injectable } from '@nestjs/common';
import { UserEffect } from 'src/shared/enums/user-effect.enum';
import { VoteValue } from 'src/shared/enums/vote-value.enum';
import { UserId } from 'src/shared/interfaces/user.interface';
import { WebSocket } from 'ws';
import { BroadcastService } from './broadcast.service';
import { RoomService } from './room.service';
import { UserService } from './user.service';

@Injectable()
export class PokerService {
  constructor(
    private readonly userService: UserService,
    private readonly roomService: RoomService,
    private readonly broadcastService: BroadcastService,
  ) {}

  public connectNewUser(websocket: WebSocket): void {
    const newUser = this.userService.new(
      `Philippe_${Math.floor(Math.random() * 100000)}`,
    );
    this.broadcastService.addConnectedClient(newUser.id, websocket);
  }

  public disconnectUser(websocket: WebSocket): void {
    const disconnectedUserId = this.broadcastService.getUserIdFromWs(websocket);
    const updatedRoom = this.roomService.removeUser(disconnectedUserId);
    this.userService.delete(disconnectedUserId);
    this.broadcastService.removeConnectedClient(disconnectedUserId);
    if (updatedRoom) {
      this.broadcastService.broadcastRoomUpdate(updatedRoom.id);
    }
  }

  public handleUserVoteUpdate(vote: VoteValue, websocket: WebSocket): void {
    const updatedUserId = this.broadcastService.getUserIdFromWs(websocket);
    this.userService.setUserVote(updatedUserId, vote);
    this.broadCastToRoomOfUser(updatedUserId);
  }

  public handleUserNameUpdate(name: string, websocket: WebSocket): void {
    const updatedUserId = this.broadcastService.getUserIdFromWs(websocket);
    this.userService.update(updatedUserId, { name });
    this.broadCastToRoomOfUser(updatedUserId);
  }

  public handleUserEffectUpdate(
    effect: UserEffect | null,
    websocket: WebSocket,
  ): void {
    const updatedUserId = this.broadcastService.getUserIdFromWs(websocket);
    this.userService.update(updatedUserId, { effect });
    this.broadCastToRoomOfUser(updatedUserId);
  }

  private broadCastToRoomOfUser(userId: UserId): void {
    const updatedUserRoomId = this.roomService.getRoomFromUserId(userId)?.id;
    if (updatedUserRoomId) {
      this.broadcastService.broadcastRoomUpdate(updatedUserRoomId);
    }
  }
}
