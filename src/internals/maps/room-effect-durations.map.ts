import { RoomEffect } from '../../shared/enums/room-effect.enum';

type Duration = number;

export const ROOM_EFFECT_DURATIONS_MAP: Record<RoomEffect, Duration> = {
  [RoomEffect.Fanfare]: 5000,
  [RoomEffect.Explosion]: 3000,
};
