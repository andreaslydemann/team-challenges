import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { TeamActions, UserActions } from '../actions';
import { RootState } from '../reducers';
import { Skeleton } from 'antd';
import { MainLayout, StyledTitle, TeamsTable } from '../components';
import i18n from '../strings/i18n';

interface Props extends RouteComponentProps<void> {
    state: RootState.TeamState;
    teamActions: TeamActions;
    userActions: UserActions;
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
                                data={this.props.state.teams}
                            />
                        )}
                </div>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Props, 'state'> {
    return { state: state.teams };
}

function mapDispatchToProps(dispatch: Dispatch<RootState.TeamState>): Pick<Props, 'teamActions' | 'userActions'> {
    return {
        teamActions: bindActionCreators(TeamActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch),
    };
}