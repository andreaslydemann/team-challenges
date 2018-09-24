import { createSelector } from 'reselect';
import * as _ from 'lodash';
import { SubmissionModel } from '../models';
import { RootState } from '../reducers';
import { omit } from '../utils';

export const getChallengesTableData = createSelector(
    (state: RootState) => state.challenges.challenges,
    (state: RootState) => state.submissions.submissions,
    (state: RootState) => state.ratings.ratings,
    (challenges, submissions, ratings) => {
        const items = _.map(challenges, challenge => {
            const i = submissions.findIndex(x => x.challengeId === challenge.id)

            return _.assign({ key: challenge.id, name: challenge.name },
                i !== -1 ? { submissionId: submissions[i].id, status: submissions[i].status, timeline: submissions[i].createdAt } :
                    { submissionId: null, status: SubmissionModel.Status.NOT_SUBMITTED, timeline: null });
        });

        return _.map(items, item => {
            const i = ratings.findIndex(x => x.submissionId === item.submissionId)

            return omit(_.assign(item,
                i !== -1 ? { scorePercentage: ratings[i].scorePercentage, comment: ratings[i].comment } :
                    { scorePercentage: null, comment: "" }), 'submissionId');
        });
    }
);

export const getChallengeDetailsTableData = createSelector(
    (state: RootState) => state.teams.teams,
    (state: RootState) => state.submissions.submissions,
    (state: RootState) => state.ratings.ratings,
    (teams, submissions, ratings) => {
        const items = _.map(teams, team => {
            const i = submissions.findIndex(x => x.teamId === team.id)

            return _.assign({ key: team.id, team: team.name },
                i !== -1 ? { submissionId: submissions[i].id, status: submissions[i].status, timeline: submissions[i].createdAt } :
                    { submissionId: null, status: SubmissionModel.Status.NOT_SUBMITTED, timeline: null });
        });

        return _.map(items, item => {
            const i = ratings.findIndex(x => x.submissionId === item.submissionId)

            return omit(_.assign(item,
                i !== -1 ? { scorePercentage: ratings[i].scorePercentage, comment: ratings[i].comment } :
                    { scorePercentage: null, comment: "" }), 'submissionId');
        });
    }
);