export interface Room {
  id: string;
  name: string;
  userIds: string[];
  isHidden: boolean;
  intervalId: NodeJS.Timer | null;
}

export type RoomId = string;
