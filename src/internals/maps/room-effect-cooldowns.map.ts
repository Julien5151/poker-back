import { RoomEffect } from 'src/shared/enums/room-effect.enum';

type CoolDown = number;

export const ROOM_EFFECT_COOLDOWNS_MAP: Record<RoomEffect, CoolDown> = {
  [RoomEffect.Fanfare]: 60000,
  [RoomEffect.Ignition]: 60000,
  [RoomEffect.Explosion]: 600000,
  [RoomEffect.Chenille]: 600000,
  [RoomEffect.NoFun]: 0,
};
