import { VoteValue } from '../enums/vote-value.enum';

type Weight = number;

export const VOTE_VALUE_WEIGHT_MAP: Record<VoteValue, Weight> = {
  [VoteValue.One]: 1,
  [VoteValue.Two]: 2,
  [VoteValue.Three]: 3,
  [VoteValue.Five]: 5,
  [VoteValue.Eight]: 8,
  [VoteValue.Thirteen]: 13,
  [VoteValue.TwentyOne]: 21,
  [VoteValue.Graive]: 22,
  [VoteValue.MiddleFinger]: 23,
  [VoteValue.Shrug]: 24,
  [VoteValue.Surf]: 25,
};
