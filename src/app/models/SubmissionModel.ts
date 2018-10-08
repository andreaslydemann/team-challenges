export interface SubmissionModel {
    id: string;
    status: SubmissionModel.Status;
    createdAt: Date;
    challengeId: string;
    teamId: string;
}

export namespace SubmissionModel {
    export enum Status {
        NOT_SUBMITTED = "Not submitted",
        TO_BE_EVALUATED = "To be evaluated",
        EVALUATED = "Evaluated"
    }
}