import { UserId } from './user.interface';

export type RoomName = string;

export interface Room {
  name: RoomName;
  userIds: UserId[];
  isHidden: boolean;
  intervalId: NodeJS.Timer | null;
}
