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
    return super.set(room);
  }

  public getUserIds(roomName: RoomName): UserId[] {
    return this.entities.get(roomName).userIds;
  }

  public getRoomFromUserId(userId: UserId): Room | undefined {
    return [...this.entities.entries()].find(([, room]) =>
      room.userIds.includes(userId),
    )?.[1];
  }

  public removeUser(userId: UserId): Room {
    const room = this.getRoomFromUserId(userId);
    return this.update(room.name, {
      userIds: room.userIds.filter((usId) => usId !== userId),
    });
  }

  public addUser(userId: UserId, roomName: RoomName): Room {
    const room = this.get(roomName);
    room.userIds.push(userId);
    return room;
  }
}
