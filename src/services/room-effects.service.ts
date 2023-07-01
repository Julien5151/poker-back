import { Injectable } from '@nestjs/common';
import { Room } from 'src/internals/interfaces/room.interface';
import { ROOM_EFFECT_COOLDOWNS_MAP } from 'src/internals/maps/room-effect-cooldowns.map';
import { Duration, ROOM_EFFECT_DURATIONS_MAP } from 'src/internals/maps/room-effect-durations.map';
import { RoomEffect } from 'src/shared/enums/room-effect.enum';
import { BroadcastService } from './broadcast.service';
import { RoomService } from './room.service';
import { UserService } from './user.service';

@Injectable()
export class RoomEffectsService {
  constructor(
    private readonly broadcastService: BroadcastService,
    private readonly roomService: RoomService,
    private readonly userService: UserService,
  ) {}

  public updateRoomWithFanfare(room: Room): void {
    const currentTimeStamp = new Date().getTime();
    // If cooldown is not over yet or an effect is already playing, do not update the room
    if (room.roomEffect || currentTimeStamp < room.roomEffectCoolDowns[RoomEffect.Fanfare]) return;
    const users = room.userIds.map((userId) => this.userService.get(userId));
    const usersWithVotes = users.filter((user) => user.vote);
    const usersHaveSameVote = new Set(usersWithVotes.map((user) => user.vote?.value)).size === 1;
    if (usersWithVotes.length === room.userIds.length && usersWithVotes.length >= 3 && usersHaveSameVote) {
      this.roomService.update(room.name, {
        roomEffect: RoomEffect.Fanfare,
        roomEffectCoolDowns: {
          ...room.roomEffectCoolDowns,
          [RoomEffect.Fanfare]: currentTimeStamp + ROOM_EFFECT_COOLDOWNS_MAP[RoomEffect.Fanfare],
        },
      });
      this.resetRoomEffect(room, ROOM_EFFECT_DURATIONS_MAP[RoomEffect.Fanfare]);
    }
  }

  private resetRoomEffect(room: Room, delay: Duration): void {
    setTimeout(() => {
      this.roomService.update(room.name, {
        roomEffect: null,
      });
      this.broadcastService.broadcastRoomUpdate(room.name);
    }, delay);
  }
}
