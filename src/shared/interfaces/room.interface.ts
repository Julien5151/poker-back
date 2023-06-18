import { UserId } from './user.interface';

export type RoomId = string;

export interface Room {
  id: RoomId;
  name: string;
  userIds: UserId[];
  isHidden: boolean;
  intervalId: NodeJS.Timer | null;
}
