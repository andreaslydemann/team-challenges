import {SubmissionModel} from './SubmissionModel'

export interface ChallengeModel {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
}

export namespace ChallengeModel {
    export interface ChallengeTableData {
        key: string;
        name: string;
        status: SubmissionModel.Status;
        timeline: Date;
        scorePercentage: number;
        comment: string;
    }
}