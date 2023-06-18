import { Injectable } from '@nestjs/common';
import { Room, RoomId } from 'src/shared/interfaces/room.interface';
import { UserId } from 'src/shared/interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { CrudService } from './crud.service';

@Injectable()
export class RoomService extends CrudService<Room> {
  public override new(name: string): Room {
    const room: Room = {
      id: uuidv4() as RoomId,
      name,
      userIds: [],
      isHidden: true,
      intervalId: null,
    };
    super.set(room);
    return room;
  }

  public getUserIds(roomId: RoomId): Array<UserId> {
    return this.entities.get(roomId).userIds;
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
  public removeUserFromRoom(userId: UserId): Room | null {
    const room = this.getRoomFromUserId(userId);
    const updatedUserIds = room.userIds.filter((usId) => usId !== userId);
    if (updatedUserIds.length === 0) {
      this.delete(room.id);
      return null;
    }
    return this.update(room.id, {
      userIds: updatedUserIds,
    });
  }
}
