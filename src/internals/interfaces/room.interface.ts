import { RoomEffect } from 'src/shared/enums/room-effect.enum';
import { CoolDownTimestamp } from 'src/shared/types/cooldown-timestamp.type';
import { RoomName } from 'src/shared/types/room-name.type';
import { UserId } from 'src/shared/types/user-id.type';

export interface Room {
  name: RoomName;
  userIds: UserId[];
  isHidden: boolean;
  roomEffect: RoomEffect | null;
  roomEffectCoolDowns: Record<RoomEffect, CoolDownTimestamp>;
  intervalId: NodeJS.Timer | null;
}
