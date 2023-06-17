import { UserEffect } from '../enums/user-effect.enum';
import { Vote } from './vote.interface';

export interface User {
  id: string;
  name: string;
  vote: Vote | null;
  effect: UserEffect | null;
}

export type UserId = string;
