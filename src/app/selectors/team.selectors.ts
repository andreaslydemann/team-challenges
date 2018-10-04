import { createSelector } from 'reselect';
import * as _ from 'lodash';
import { RootState } from '../reducers';
import {
    TeamModel,
    UserModel
} from '../models';

export const getTeamsTableData = createSelector(
    (state: RootState) => state.teams.teams,
    (state: RootState) => state.users.users,
    (teams: TeamModel[], users: UserModel[]): TeamModel[] => {
        return _.map(teams, team => {
            return _.assign({
                id: team.id,
                name: team.name,
                numberOfMembers: _.filter(users, user => user.teamId === team.id).length
            });
        });
    }
);