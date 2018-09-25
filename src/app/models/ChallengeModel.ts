import { SubmissionModel } from './SubmissionModel';

export interface ChallengeModel {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
}

export namespace ChallengeModel {
    export interface ChallengeDetailsModel extends ChallengeModel {
        file: object
    }
    export interface ChallengesTableData {
        key: string;
        name: string;
        status: SubmissionModel.Status;
        timeline: Date;
        scorePercentage: number;
        comment: string;
    }
    export interface ChallengeDetailsTableData {
        key: string;
        team: string;
        status: SubmissionModel.Status;
        timeline: Date;
        scorePercentage: number;
        comment: string;
    }
}