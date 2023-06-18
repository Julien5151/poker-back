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

  public getUserIds(id: RoomId): Array<UserId> {
    return this.entities.get(id).userIds;
  }
}
