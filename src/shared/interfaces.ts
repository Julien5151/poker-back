import { MessageType, Vote } from "./enums.ts";

export interface User {
  name: string;
  vote: Vote | null;
}

export interface RoomState {
  users: User[];
  isHidden: boolean;
}

export interface RoomMessage {
  messageType: MessageType.RoomUpdate;
  data: RoomState;
}

export interface UserMessage {
  messageType: MessageType.UsersUpdate;
  data: User;
}

export interface HiddenMessage {
  messageType: MessageType.HiddenUpdate;
  data: boolean;
}
