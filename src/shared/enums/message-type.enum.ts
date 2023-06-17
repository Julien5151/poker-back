export enum MessageType {
  UserConnect = 'user_connect',
  UserDisconnect = 'user_disconnect',
  UserVoteUpdate = 'user_vote_update',
  UserNameUpdate = 'user_name_update',
  UserEffectUpdate = 'user_effect_update',
  RoomUpdate = 'room_update',
  HiddenUpdate = 'hidden_update',
  ResetVotes = 'reset_votes',
  Ping = 'ping',
}
