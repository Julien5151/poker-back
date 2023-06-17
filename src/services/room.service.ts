import { Injectable } from '@nestjs/common';
import { UserEffect, VoteValue } from '../shared/enums';
import { Room } from '../shared/interfaces';

@Injectable()
export class RoomService {
  private rooms = new Map<string, Room>();

  // TEMP - only while no multiroom in frontend
  public createRoom(id: string): Room {
    const newRoom: Room = {
      id,
      users: [],
      isHidden: true,
      intervalId: null,
    };
    this.rooms.set(id, newRoom);
    return newRoom;
  }

  public deleteRoom(id: string): boolean {
    return this.rooms.delete(id);
  }

  public getRoom(id: string): Room {
    return this.rooms.get(id);
  }

  public addUser(roomId: string, userId: string, userName: string): Room {
    const room = this.rooms.get(roomId);
    room.users = [
      ...room.users,
      { id: userId, name: userName, vote: null, effect: null },
    ];
    return room;
  }

  public updateUserVote(roomId: string, userId: string, vote: VoteValue): Room {
    const room = this.rooms.get(roomId);
    room.users = room.users.map((usr) =>
      usr.id === userId ? { ...usr, vote } : usr,
    );
    return room;
  }

  public updateUserName(roomId: string, userId: string, name: string): Room {
    const room = this.rooms.get(roomId);
    room.users = room.users.map((usr) =>
      usr.id === userId ? { ...usr, name } : usr,
    );
    return room;
  }

  public updateUserEffect(
    roomId: string,
    userId: string,
    effect: UserEffect | null,
  ): Room {
    const room = this.rooms.get(roomId);
    room.users = room.users.map((usr) =>
      usr.id === userId ? { ...usr, effect } : usr,
    );
    return room;
  }

  public removeUser(roomId: string, userId: string): Room {
    const room = this.rooms.get(roomId);
    room.users = room.users.filter((user) => user.id !== userId);
    return room;
  }

  public toggleHidden(roomId: string): Room {
    const room = this.rooms.get(roomId);
    room.isHidden = !room.isHidden;
    return room;
  }

  public resetVotes(roomId: string): Room {
    const room = this.rooms.get(roomId);
    room.users = room.users.map((user) => ({
      ...user,
      vote: null,
    }));
    room.isHidden = true;
    return room;
  }

  public resetRoom(roomId: string): Room {
    const resetedRoom: Room = {
      id: roomId,
      users: [],
      isHidden: true,
      intervalId: null,
    };
    this.rooms.set(roomId, resetedRoom);
    return resetedRoom;
  }
}
