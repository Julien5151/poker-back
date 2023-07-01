import { RoomEffect } from 'src/shared/enums/room-effect.enum';
import { RoomName } from 'src/shared/types/room-name.type';
import { UserId } from 'src/shared/types/user-id.type';

type CoolDownTimestamp = number;

export interface Room {
  name: RoomName;
  userIds: UserId[];
  isHidden: boolean;
  roomEffectCoolDowns: Record<RoomEffect, CoolDownTimestamp>;
  intervalId: NodeJS.Timer | null;
}
