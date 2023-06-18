import { RoomName } from './room.interface';
import { User } from './user.interface';

export interface RoomUpdate {
  name: RoomName;
  users: User[];
  isHidden: boolean;
}
