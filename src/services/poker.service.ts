import { BadRequestException, Injectable } from '@nestjs/common';
import { MessageType } from 'src/shared/enums/message-type.enum';
import { RoomEffect } from 'src/shared/enums/room-effect.enum';
import { UserAction } from 'src/shared/enums/user-action.enum';
import { UserEffect } from 'src/shared/enums/user-effect.enum';
import { VoteValue } from 'src/shared/enums/vote-value.enum';
import { UserSuccessfullyConnectedMessage } from 'src/shared/interfaces/ws-message.interface';
import { ROOM_NAME_REGEX } from 'src/shared/regex/room-name.regex';
import { UserId } from 'src/shared/types/user-id.type';
import { WebSocket } from 'ws';
import { BroadcastService } from './broadcast.service';
import { RoomEffectsService } from './room-effects.service';
import { RoomService } from './room.service';
import { UserService } from './user.service';

@Injectable()
export class PokerService {
  constructor(
    private readonly userService: UserService,
    private readonly roomService: RoomService,
    private readonly broadcastService: BroadcastService,
    private readonly roomEffectsService: RoomEffectsService,
  ) {}

  public handleNewUserConnection(websocket: WebSocket): void {
    const newUser = this.userService.new(`Philippe_${Math.floor(Math.random() * 100000)}`);
    this.broadcastService.addConnectedClient(newUser.id, websocket);
  }

  public handleUserDisconnection(websocket: WebSocket): void {
    const disconnectedUserId = this.broadcastService.getUserIdFromWs(websocket);
    const updatedRoom = this.roomService.removeUser(disconnectedUserId);
    this.userService.delete(disconnectedUserId);
    this.broadcastService.removeConnectedClient(disconnectedUserId);
    if (updatedRoom.userIds.length === 0) {
      this.roomService.deleteRoomAndClearInterval(updatedRoom.name);
    } else {
      this.broadcastService.broadcastRoomUpdate(updatedRoom.name);
    }
  }

  public handleUserJoinRoom(roomName: string, websocket: WebSocket): void {
    if (!roomName.match(ROOM_NAME_REGEX)) throw new BadRequestException('Invalid room name');
    const userId = this.broadcastService.getUserIdFromWs(websocket);
    const currentRoom = this.roomService.getRoomFromUserId(userId);
    if (currentRoom) {
      this.roomService.removeUser(userId);
      if (currentRoom.userIds.length === 0) {
        this.roomService.deleteRoomAndClearInterval(currentRoom.name);
      } else {
        this.broadcastService.broadcastRoomUpdate(currentRoom.name);
      }
    }
    const targetRoom = this.roomService.get(roomName);
    if (targetRoom) {
      this.roomService.addUser(userId, targetRoom.name);
    } else {
      this.roomService.new(roomName);
      this.roomService.addUser(userId, roomName);
    }
    this.broadCastToRoomOfUser(userId);
    const userConnectedMessage: UserSuccessfullyConnectedMessage = {
      event: MessageType.UserSuccessfullyConnected,
      data: userId,
    };
    this.broadcastService.broadcastToUser(userId, userConnectedMessage);
  }

  public handleUserVoteUpdate(vote: VoteValue, websocket: WebSocket): void {
    const updatedUserId = this.broadcastService.getUserIdFromWs(websocket);
    this.userService.updateUserVote(updatedUserId, vote);
    this.broadCastToRoomOfUser(updatedUserId);
  }

  public handleUserActionUpdate(action: UserAction, websocket: WebSocket): void {
    const updatedUserId = this.broadcastService.getUserIdFromWs(websocket);
    const room = this.roomService.getRoomFromUserId(updatedUserId);
    if (room.roomEffect === RoomEffect.NoFun) return;
    if (updatedUserId) {
      this.userService.update(updatedUserId, { action });
      if (room) {
        if (!(room.roomEffect === RoomEffect.Chenille) && action === UserAction.NuclearIgnition) {
          this.roomEffectsService.checkIgnition(room.name);
          this.broadCastToRoomOfUser(updatedUserId);
        } else if (!(room.roomEffect === RoomEffect.Ignition) && action === UserAction.ChenilleIgnition) {
          this.roomEffectsService.checkChenille(room.name);
          this.broadCastToRoomOfUser(updatedUserId);
        }
        if (action === null) this.broadCastToRoomOfUser(updatedUserId);
      }
    }
  }

  public handleUserNameUpdate(name: string, websocket: WebSocket): void {
    const updatedUserId = this.broadcastService.getUserIdFromWs(websocket);
    this.userService.update(updatedUserId, { name });
    this.broadCastToRoomOfUser(updatedUserId);
  }

  public handleUserEffectUpdate(effect: UserEffect | null, websocket: WebSocket): void {
    const updatedUserId = this.broadcastService.getUserIdFromWs(websocket);
    const room = this.roomService.getRoomFromUserId(updatedUserId);
    if (room.roomEffect === RoomEffect.NoFun) return;
    if (updatedUserId) {
      this.userService.update(updatedUserId, { effect });
      this.broadCastToRoomOfUser(updatedUserId);
    }
  }

  public handleHiddenUpdate(websocket: WebSocket): void {
    const userInitiatingActionId = this.broadcastService.getUserIdFromWs(websocket);
    const room = this.roomService.getRoomFromUserId(userInitiatingActionId);
    if (room) {
      if (room.isHidden) {
        this.roomEffectsService.checkFanfare(room.name);
      }
      this.roomService.update(room.name, { isHidden: !room.isHidden });
      this.broadCastToRoomOfUser(userInitiatingActionId);
    }
  }

  public handleNoFunOn(websocket: WebSocket): void {
    const userInitiatingActionId = this.broadcastService.getUserIdFromWs(websocket);
    const room = this.roomService.getRoomFromUserId(userInitiatingActionId);
    if (room) {
      this.roomService.update(room.name, { roomEffect: RoomEffect.NoFun });
      this.broadCastToRoomOfUser(userInitiatingActionId);
    }
  }

  public handleNoFunOff(websocket: WebSocket): void {
    const userInitiatingActionId = this.broadcastService.getUserIdFromWs(websocket);
    const room = this.roomService.getRoomFromUserId(userInitiatingActionId);
    if (room) {
      this.roomService.update(room.name, { roomEffect: null });
      this.broadCastToRoomOfUser(userInitiatingActionId);
    }
  }

  public handleResetVotes(websocket: WebSocket): void {
    const userInitiatingActionId = this.broadcastService.getUserIdFromWs(websocket);
    const room = this.roomService.getRoomFromUserId(userInitiatingActionId);
    if (room) {
      const { userIds } = room;
      userIds.forEach((userId) => this.userService.update(userId, { vote: null }));
      this.roomService.update(room.name, { isHidden: true });
      this.broadCastToRoomOfUser(userInitiatingActionId);
    }
  }

  private broadCastToRoomOfUser(userId: UserId): void {
    const userRoomName = this.roomService.getRoomFromUserId(userId)?.name;
    if (userRoomName) {
      this.broadcastService.broadcastRoomUpdate(userRoomName);
    }
  }
}
