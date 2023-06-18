import { Injectable } from '@nestjs/common';
import { VoteValue } from 'src/shared/enums/vote-value.enum';
import { User } from 'src/shared/interfaces/user.interface';
import { VOTE_VALUE_WEIGHT_MAP } from 'src/shared/maps/vote.map';
import { UserId } from 'src/shared/types/user-id.type';
import { v4 as uuidv4 } from 'uuid';
import { CrudService } from './crud.service';

@Injectable()
export class UserService extends CrudService<User> {
  public override new(name: string): User {
    const user: User = {
      id: uuidv4() as UserId,
      name,
      vote: null,
      effect: null,
    };
    super.set(user);
    return user;
  }

  public setUserVote(userId: UserId, voteValue: VoteValue): User {
    const user = this.get(userId);
    user.vote = {
      value: voteValue,
      weight: VOTE_VALUE_WEIGHT_MAP[voteValue],
    };
    return user;
  }
}
