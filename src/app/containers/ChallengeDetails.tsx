import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { ChallengeActions, RatingActions, SubmissionActions, TeamActions } from '../actions';
import { RootState } from '../reducers';
import { MainLayout, ChallengesTable, StyledTitle, StyledDescription } from '../components';
import * as selectors from '../selectors';
import { omit } from '../utils';
import { ChallengeModel } from '../models';
import i18n from '../strings/i18n';
import { Button } from 'antd';

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    tableData: ChallengeModel.ChallengeDetailsTableData[];
    state: RootState.ChallengeState;
    challengeActions: ChallengeActions;
    ratingActions: RatingActions;
    submissionActions: SubmissionActions;
    teamActions: TeamActions;
}

@connect(mapStateToProps, mapDispatchToProps)
export class ChallengeDetails extends React.Component<Props> {

    constructor(props: Props, context?: any) {
        super(props, context);
    }

    componentWillMount() {
        const { id } = this.props.match.params;

        this.props.challengeActions.getChallenge(id);
        this.props.submissionActions.getSubmissionsOfChallenge(id);
        this.props.ratingActions.getRatingsOfChallenge(id);
        this.props.teamActions.getTeamsOfChallenge(id);
    }

    render() {
        return (
            <MainLayout location={location}>
                <div>
                    {this.props.state.error ? (
                        <StyledTitle>{this.props.state.error}</StyledTitle>
                    ) : (
                            <div>
                                <StyledTitle>{this.props.state.challenges[0].name}</StyledTitle>
                                <StyledDescription>{this.props.state.challenges[0].description}</StyledDescription>
                                <ChallengesTable isChallengeDetailsTable={true} data={this.props.tableData} />
                                <Button
                                    onClick={() => { this.props.history.push(this.props.location.pathname + '/submission') }}
                                    style={{
                                        float: 'right',
                                        width: '112px',
                                        marginBottom: '15px'
                                    }}>{i18n.t('common:submission')}</Button>
                            </div>
                        )}
                </div>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Props, 'state' | 'tableData'> {
    const tableData = selectors.getChallengeDetailsTableData(state);

    return { state: state.challenges, tableData };
}

function mapDispatchToProps(dispatch: Dispatch<RootState.ChallengeState>):
    Pick<Props, 'challengeActions' | 'ratingActions' | 'submissionActions' | 'teamActions'> {
    return {
        challengeActions: bindActionCreators(omit(ChallengeActions, 'Type'), dispatch),
        ratingActions: bindActionCreators(omit(RatingActions, 'Type'), dispatch),
        submissionActions: bindActionCreators(omit(SubmissionActions, 'Type'), dispatch),
        teamActions: bindActionCreators(omit(TeamActions, 'Type'), dispatch)
    };
}