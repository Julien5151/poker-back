import { RoomEffect } from 'src/shared/enums/room-effect.enum';
import { UserAction } from 'src/shared/enums/user-action.enum';
import { Duration, ROOM_EFFECT_DURATIONS_MAP } from 'src/shared/maps/room-effect-durations.map';

export const USER_ACTION_DURATIONS_MAP: Record<UserAction, Duration> = {
  [UserAction.NuclearIgnition]: ROOM_EFFECT_DURATIONS_MAP[RoomEffect.Ignition],
  [UserAction.ChenilleIgnition]: ROOM_EFFECT_DURATIONS_MAP[RoomEffect.ChenilleIgnition],
};
