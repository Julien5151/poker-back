import { Injectable } from '@nestjs/common';
import { VoteValue } from 'src/shared/enums/vote-value.enum';
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
    const updatedUserRoomId =
      this.roomService.getRoomFromUserId(updatedUserId)?.id;
    if (updatedUserRoomId) {
      this.broadcastService.broadcastRoomUpdate(updatedUserRoomId);
    }
  }
}
