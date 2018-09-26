import { createSelector } from 'reselect';
import * as _ from 'lodash';
import { RootState } from '../reducers';

export const getTeamsTableData = createSelector(
    (state: RootState) => state.teams.teams,
    (state: RootState) => state.users.users,
    (teams, users) => {
        return _.map(teams, team => {
            return _.assign({
                key: team.id,
                name: team.name,
                numberOfMembers: _.filter(users, user => user.teamId === team.id).length
            });
        });
    }
);