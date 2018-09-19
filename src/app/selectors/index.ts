import { ChallengeModel, SubmissionModel } from '../models';
import { RootState } from '../reducers';

export function getChallengeTableData(state: RootState): ChallengeModel.ChallengeTableData[] {
    const tableData: ChallengeModel.ChallengeTableData[] = [];

    const { challenges } = state.challenges;
    const { ratings } = state.ratings;
    const { submissions } = state.submissions;

    challenges.forEach(challenge => {
        const i = submissions.findIndex(x => x.challengeId === challenge.id)

        if (i !== -1) {
            const j = ratings.findIndex(x => x.submissionId === submissions[i].id)

            if (i !== -1) {
                tableData.push({
                    key: challenge.id,
                    name: challenge.name,
                    status: submissions[i].status,
                    timeline: submissions[i].createdAt,
                    scorePercentage: ratings[j].scorePercentage,
                    comment: ratings[j].comment,
                });
            } else {
                tableData.push({
                    key: challenge.id,
                    name: challenge.name,
                    status: submissions[i].status,
                    timeline: submissions[i].createdAt,
                    scorePercentage: null,
                    comment: "",
                });
            }
        } else {
            tableData.push({
                key: challenge.id,
                name: challenge.name,
                status: SubmissionModel.Status.NOT_SUBMITTED,
                timeline: null,
                scorePercentage: null,
                comment: "",
            });
        }
    });

    return tableData;
}