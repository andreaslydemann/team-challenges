import { RouterState } from 'react-router-redux';
import {
  ChallengeModel,
  RatingModel,
  SubmissionModel,
  TeamModel
} from '../models';

export interface RootState {
  challenges: RootState.ChallengeState;
  ratings: RootState.RatingState;
  submissions: RootState.SubmissionState;
  teams: RootState.TeamState;
  router: RouterState;
}

export namespace RootState {
  export type ChallengeState = {
    challenges: ChallengeModel[],
    challengeDetails: ChallengeModel.ChallengeDetailsModel,
    loading: boolean,
    error: string
  };
  export type RatingState = {
    ratings: RatingModel[],
    loading: boolean
  };
  export type SubmissionState = {
    submissions: SubmissionModel[],
    loading: boolean,
    uploading: boolean
  };
  export type TeamState = {
    teams: TeamModel[],
    loading: boolean
  };
}