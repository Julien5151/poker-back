import { Injectable } from '@nestjs/common';
import { Room } from 'src/interfaces/room.interface';
import { RoomName } from 'src/shared/types/room-name.type';
import { UserId } from 'src/shared/types/user-id.type';
import { CrudService } from './crud.service';

@Injectable()
export class RoomService extends CrudService<Room> {
  public override new(name: RoomName): Room {
    const room: Room = {
      name,
      userIds: [],
      isHidden: true,
      intervalId: null,
    };
    super.set(room);
    return room;
  }

  public getUserIds(roomName: RoomName): UserId[] {
    return this.entities.get(roomName).userIds;
  }

  public getRoomFromUserId(userId: UserId): Room | undefined {
    return [...this.entities.entries()].find(([, room]) =>
      room.userIds.includes(userId),
    )?.[1];
  }

  /**
   * Remove user from room and returns the updated room if there are still some active users
   * or delete room and returns null if room is empty after last user has left
   */
  public removeUser(userId: UserId): Room | null {
    const room = this.getRoomFromUserId(userId);
    const updatedUserIds = room.userIds.filter((usId) => usId !== userId);
    if (updatedUserIds.length === 0) {
      this.delete(room.name);
      return null;
    }
    return this.update(room.name, {
      userIds: updatedUserIds,
    });
  }

  public addUser(userId: UserId, roomName: RoomName): Room {
    const room = this.get(roomName);
    room.userIds.push(userId);
    return room;
  }
}
