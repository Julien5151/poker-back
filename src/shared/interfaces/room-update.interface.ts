import { RoomId } from './room.interface';
import { User } from './user.interface';

export interface RoomUpdate {
  id: RoomId;
  name: string;
  users: User[];
  isHidden: boolean;
}
