import { Injectable } from '@nestjs/common';
import { RoomState, User } from './shared/interfaces';

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

  public addUser(userName: string): RoomState {
    this.roomState.users = [
      ...this.roomState.users,
      { name: userName, vote: null },
    ];
    return this.roomState;
  }

  public updateUser(user: User): RoomState {
    this.roomState.users = this.roomState.users.map((usr) =>
      usr.name === user.name ? user : usr,
    );
    return this.roomState;
  }

  public removeUser(userName: string): RoomState {
    this.roomState.users = this.roomState.users.filter(
      (user) => user.name !== userName,
    );
    return this.roomState;
  }

  public updateHidden(isHidden: boolean): RoomState {
    this.roomState.isHidden = isHidden;
    return this.roomState;
  }

  public resetRoom(): RoomState {
    this.roomState = roomStateInitialState;
    return this.roomState;
  }
}
