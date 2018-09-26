import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { TeamActions } from '../actions';
import { RootState } from '../reducers';
import { TeamModel } from '../models';
import * as selectors from '../selectors';
import { Skeleton } from 'antd';
import { MainLayout, StyledTitle, TeamsTable } from '../components';
import i18n from '../strings/i18n';
import { omit } from '../utils';

interface Props extends RouteComponentProps<void> {
    teamsTableData: TeamModel.TeamsTableData[];
    state: RootState.TeamState;
    teamActions: TeamActions;
}

@connect(mapStateToProps, mapDispatchToProps)
export class Teams extends React.Component<Props> {
    constructor(props: Props, context?: any) {
        super(props, context);
    }

    componentDidMount() {
        this.props.teamActions.initTeams();
    }

    render() {
        return (
            <MainLayout location={location}>
                <div>
                    <StyledTitle>{i18n.t('glossary:teamsTitle')}</StyledTitle>
                    {this.props.state.loading ? (
                        <Skeleton active={true} />
                    ) : (
                            <TeamsTable
                                data={this.props.teamsTableData}
                            />
                        )}
                </div>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Props, 'state' | 'teamsTableData'> {
    return { state: state.teams, teamsTableData: selectors.getTeamsTableData(state) };
}

function mapDispatchToProps(dispatch: Dispatch<RootState.TeamState>): Pick<Props, 'teamActions'> {
    return { teamActions: bindActionCreators(omit(TeamActions, 'Type'), dispatch) };
}