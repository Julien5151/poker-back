import { Injectable } from '@nestjs/common';
import { UserEffect, Vote } from './shared/enums';
import { RoomState } from './shared/interfaces';

const roomStateInitialState: RoomState = {
  users: [],
  isHidden: true,
};

@Injectable()
export class RoomService {
  private roomState: RoomState = roomStateInitialState;

  public getRoomState(): RoomState {
    return this.roomState;
  }

  public addUser(userId: string, userName: string): RoomState {
    this.roomState.users = [
      ...this.roomState.users,
      { id: userId, name: userName, vote: null, effect: null },
    ];
    return this.roomState;
  }

  public updateUserVote(userId: string, vote: Vote): RoomState {
    this.roomState.users = this.roomState.users.map((usr) =>
      usr.id === userId ? { ...usr, vote } : usr,
    );
    return this.roomState;
  }

  public updateUserName(userId: string, name: string): RoomState {
    this.roomState.users = this.roomState.users.map((usr) =>
      usr.id === userId ? { ...usr, name } : usr,
    );
    return this.roomState;
  }

  public updateUserEffect(userId: string, effect: UserEffect): RoomState {
    this.roomState.users = this.roomState.users.map((usr) =>
      usr.id === userId ? { ...usr, effect } : usr,
    );
    return this.roomState;
  }

  public removeUser(userId: string): RoomState {
    this.roomState.users = this.roomState.users.filter(
      (user) => user.id !== userId,
    );
    return this.roomState;
  }

  public toggleHidden(): RoomState {
    this.roomState.isHidden = !this.roomState.isHidden;
    return this.roomState;
  }

  public resetVotes(): RoomState {
    this.roomState.users = this.roomState.users.map((user) => ({
      ...user,
      vote: null,
    }));
    return this.roomState;
  }

  public resetRoom(): RoomState {
    this.roomState = roomStateInitialState;
    return this.roomState;
  }
}
