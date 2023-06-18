import { RoomName } from 'src/shared/types/room-name.type';
import { UserId } from 'src/shared/types/user-id.type';

export interface Room {
  name: RoomName;
  userIds: UserId[];
  isHidden: boolean;
  intervalId: NodeJS.Timer | null;
}
