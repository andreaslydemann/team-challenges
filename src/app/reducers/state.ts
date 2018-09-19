import { ChallengeModel, RatingModel, SubmissionModel } from '../models';
import { RouterState } from 'react-router-redux';

export interface RootState {
  challenges: RootState.ChallengeState;
  ratings: RootState.RatingState;
  submissions: RootState.SubmissionState;
  router: RouterState;
}

export namespace RootState {
  export type ChallengeState = {
    challenges: ChallengeModel[],
    loading: boolean
  };
  export type RatingState = {
    ratings: RatingModel[],
    loading: boolean
  };
  export type SubmissionState = {
    submissions: SubmissionModel[],
    loading: boolean
  };
}