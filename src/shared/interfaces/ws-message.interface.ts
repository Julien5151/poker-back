import { MessageType } from '../enums/message-type.enum';
import { UserEffect } from '../enums/user-effect.enum';
import { VoteValue } from '../enums/vote-value.enum';
import { Room } from './room.interface';

export type WebSocketMessage =
  | RoomMessage
  | UserVoteMessage
  | UserNameMessage
  | UserEffectMessage
  | HiddenMessage
  | ResetVotesMessage
  | PingMessage;

export interface RoomMessage {
  event: MessageType.RoomUpdate;
  data: Room;
}

export interface UserVoteMessage {
  event: MessageType.UserVoteUpdate;
  data: VoteValue;
}

export interface UserNameMessage {
  event: MessageType.UserNameUpdate;
  data: string;
}

export interface UserEffectMessage {
  event: MessageType.UserEffectUpdate;
  data: UserEffect;
}

export interface HiddenMessage {
  event: MessageType.HiddenUpdate;
}

export interface ResetVotesMessage {
  event: MessageType.ResetVotes;
}

export interface PingMessage {
  event: MessageType.Ping;
}
