import { UserEffect } from '../enums/user-effect.enum';
import { Vote } from './vote.interface';

export type UserId = string;

export interface User {
  id: UserId;
  name: string;
  vote: Vote | null;
  effect: UserEffect | null;
}
