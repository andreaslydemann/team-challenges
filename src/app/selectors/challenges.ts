import { createSelector } from 'reselect';
import { ChallengeModel, SubmissionModel } from '../models';
import { RootState } from '../reducers';

export const getChallengesTableData = createSelector(
    (state: RootState) => state.challenges.challenges,
    (state: RootState) => state.submissions.submissions,
    (state: RootState) => state.ratings.ratings,
    (challenges, submissions, ratings) => {
        const tableData: ChallengeModel.ChallengesTableData[] = [];
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
);

export const getChallengeDetailsTableData = createSelector(
    (state: RootState) => state.submissions.submissions,
    (state: RootState) => state.ratings.ratings,
    (state: RootState) => state.teams.teams,
    (submissions, ratings, teams) => {
        const tableData: ChallengeModel.ChallengeDetailsTableData[] = [];

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
);