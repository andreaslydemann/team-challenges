import { ChallengeModel } from '../models';
import { RouterState } from 'react-router-redux';

export interface RootState {
  challenges: RootState.ChallengeState;
  router: RouterState;
}

export namespace RootState {
  export type ChallengeState = ChallengeModel[];
}