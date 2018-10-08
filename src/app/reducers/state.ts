import { RouterState } from 'react-router-redux';
import {
    ChallengeModel,
    RatingModel,
    SubmissionModel,
    TeamModel,
    UserModel
} from '../models';

export interface RootState {
    auth: RootState.AuthState;
    challenges: RootState.ChallengeState;
    ratings: RootState.RatingState;
    submissions: RootState.SubmissionState;
    teams: RootState.TeamState;
    users: RootState.UserState;
    router: RouterState;
}

export namespace RootState {
    export type AuthState = {
        currentUser: UserModel,
        authenticated: boolean,
        loading: boolean
    };
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
        uploading: boolean,
        error: string
    };
    export type TeamState = {
        teams: TeamModel[],
        loading: boolean
    };
    export type UserState = {
        users: UserModel[],
        loading: boolean
    };
}