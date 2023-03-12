import { MessageType, Vote } from './enums';

export interface User {
  name: string;
  vote: Vote | null;
}

export interface RoomState {
  users: User[];
  isHidden: boolean;
}

export type WebSocketMessage =
  | RoomMessage
  | UserMessage
  | HiddenMessage
  | ResetVotesMessage;

export interface RoomMessage {
  event: MessageType.RoomUpdate;
  data: RoomState;
}

export interface UserMessage {
  event: MessageType.UsersUpdate;
  data: User;
}

export interface HiddenMessage {
  event: MessageType.HiddenUpdate;
}

export interface ResetVotesMessage {
  event: MessageType.ResetVotes;
}
