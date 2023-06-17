import { UserId } from './user.interface';

export interface Room {
  id: string;
  name: string;
  userIds: UserId[];
  isHidden: boolean;
  intervalId: NodeJS.Timer | null;
}

export type RoomId = string;
