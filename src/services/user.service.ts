import { Injectable } from '@nestjs/common';
import { User, UserId } from 'src/shared/interfaces/user.interface';
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
}
