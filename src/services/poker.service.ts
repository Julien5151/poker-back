import { Injectable } from '@nestjs/common';
import { MessageType } from 'src/shared/enums/message-type.enum';
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
    this.userService.delete(disconnectedUserId);
    this.broadcastService.removeConnectedClient(disconnectedUserId);
    const updatedRoom = this.roomService.removeUserFromRoom(disconnectedUserId);
    if (updatedRoom) {
      this.broadcastService.broadcastToRoom(updatedRoom.id, {
        event: MessageType.RoomUpdate,
        data: updatedRoom,
      });
    }
  }
}
