import { Injectable } from '@nestjs/common';
import { ROOM_EFFECT_COOLDOWNS_MAP } from 'src/internals/maps/room-effect-cooldowns.map';
import { RoomEffect } from 'src/shared/enums/room-effect.enum';
import { UserAction } from 'src/shared/enums/user-action.enum';
import { Duration, ROOM_EFFECT_DURATIONS_MAP } from 'src/shared/maps/room-effect-durations.map';
import { RoomName } from 'src/shared/types/room-name.type';
import { BroadcastService } from './broadcast.service';
import { RoomService } from './room.service';
import { UserService } from './user.service';

@Injectable()
export class RoomEffectsService {
  private readonly authorizedNuclearLaunches = new Set<RoomName>();

  constructor(
    private readonly broadcastService: BroadcastService,
    private readonly roomService: RoomService,
    private readonly userService: UserService,
  ) {}

  public checkFanfare(roomName: RoomName): void {
    const room = this.roomService.get(roomName);
    const users = room.userIds.map((userId) => this.userService.get(userId));
    const usersWithVotes = users.filter((user) => user.vote);
    const usersHaveSameVote = new Set(usersWithVotes.map((user) => user.vote?.value)).size === 1;
    if (usersWithVotes.length === room.userIds.length && usersWithVotes.length >= 3 && usersHaveSameVote) {
      this.updateRoomWithEffect(roomName, RoomEffect.Fanfare);
    }
  }

  public checkIgnition(roomName: RoomName): void {
    const room = this.roomService.get(roomName);
    if (!room) return;
    const users = room.userIds.map((userId) => this.userService.get(userId));
    const usersWithIgnition = users.filter((user) => user.action === UserAction.NuclearIgnition);
    if (usersWithIgnition.length > 0) {
      // Start ignition
      this.updateRoomWithEffect(roomName, RoomEffect.Ignition);
      setTimeout(() => {
        // Reset all ignition actions
        this.roomService
          .getUserIds(roomName)
          .map((userId) => this.userService.get(userId))
          .forEach((user) => {
            if (user.action === UserAction.NuclearIgnition) {
              this.userService.update(user.id, {
                action: null,
              });
            }
          });
        // If explosion authorized, go ahead !
        if (!!this.authorizedNuclearLaunches.has(roomName)) {
          this.updateRoomWithEffect(roomName, RoomEffect.Explosion);
          this.broadcastService.broadcastRoomUpdate(roomName);
          this.authorizedNuclearLaunches.delete(roomName);
        }
      }, ROOM_EFFECT_DURATIONS_MAP[RoomEffect.Ignition]);
    }
    if (room.roomEffect === RoomEffect.Ignition && usersWithIgnition.length >= 3) {
      this.authorizedNuclearLaunches.add(roomName);
    }
  }

  private updateRoomWithEffect(roomName: RoomName, roomEffect: RoomEffect): void {
    let room = this.roomService.get(roomName);
    if (!room) return;
    const currentTimeStamp = new Date().getTime();
    // If an effect is already playing or cooldown is not over yet, do not update the room
    if (room.roomEffect || currentTimeStamp < room.roomEffectCoolDowns[roomEffect]) return;
    room = this.roomService.update(room.name, {
      roomEffect,
      roomEffectCoolDowns: {
        ...room.roomEffectCoolDowns,
        [roomEffect]: currentTimeStamp + ROOM_EFFECT_COOLDOWNS_MAP[roomEffect],
      },
    });
    this.resetRoomEffect(room.name, ROOM_EFFECT_DURATIONS_MAP[roomEffect]);
  }

  private resetRoomEffect(roomName: RoomName, delay: Duration): void {
    setTimeout(() => {
      this.roomService.update(roomName, {
        roomEffect: null,
      });
      this.broadcastService.broadcastRoomUpdate(roomName);
    }, delay);
  }
}
