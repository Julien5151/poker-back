import { UserId } from 'src/shared/types/user-id.type';
import { UserEffect } from '../enums/user-effect.enum';
import { Vote } from './vote.interface';

export interface User {
  id: UserId;
  name: string;
  vote: Vote | null;
  effect: UserEffect | null;
}
