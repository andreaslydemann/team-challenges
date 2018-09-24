import { ChallengeModel, SubmissionModel } from '../models';
import { RootState } from '../reducers';

export function getChallengesTableData(state: RootState): ChallengeModel.ChallengesTableData[] {
    const tableData: ChallengeModel.ChallengesTableData[] = [];

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

export function getChallengeDetailsTableData(state: RootState): ChallengeModel.ChallengeDetailsTableData[] {
    const tableData: ChallengeModel.ChallengeDetailsTableData[] = [];

    const { ratings } = state.ratings;
    const { submissions } = state.submissions;
    const { teams } = state.teams;

    teams.forEach(team => {
        const i = submissions.findIndex(x => x.teamId === team.id)

        if (i !== -1) {
            const j = ratings.findIndex(x => x.submissionId === submissions[i].id)

            if (i !== -1) {
                tableData.push({
                    key: team.id,
                    team: team.name,
                    status: submissions[i].status,
                    timeline: submissions[i].createdAt,
                    scorePercentage: ratings[j].scorePercentage,
                    comment: ratings[j].comment,
                });
            } else {
                tableData.push({
                    key: team.id,
                    team: team.name,
                    status: submissions[i].status,
                    timeline: submissions[i].createdAt,
                    scorePercentage: null,
                    comment: "",
                });
            }
        } else {
            tableData.push({
                key: team.id,
                team: team.name,
                status: SubmissionModel.Status.NOT_SUBMITTED,
                timeline: null,
                scorePercentage: null,
                comment: "",
            });
        }
    });

    return tableData;
}