import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { ChallengeActions, RatingActions, SubmissionActions } from '../actions';
import { RootState } from '../reducers';
import { MainLayout, ChallengesTable, StyledTitle } from '../components';
import * as selectors from '../selectors';
import i18n from '../strings/i18n';
import { omit } from '../utils';
import { ChallengeModel } from '../models';

interface Props extends RouteComponentProps<void> {
    tableData: ChallengeModel.ChallengesTableData[];
    state: RootState.ChallengeState;
    challengeActions: ChallengeActions;
    ratingActions: RatingActions;
    submissionActions: SubmissionActions;
}

@connect(mapStateToProps, mapDispatchToProps)
export class Challenges extends React.Component<Props> {
    constructor(props: Props, context?: any) {
        super(props, context);
    }

    componentWillMount() {
        this.props.challengeActions.getChallenges()
        this.props.submissionActions.getSubmissionsOfTeam("123t")
        this.props.ratingActions.getRatingsOfTeam("123t")
    }

    showChallengeDetails = (key: string) => { this.props.history.push('/challenges/' + key) }

    render() {
        return (
            <MainLayout location={location}>
                <div>
                    <StyledTitle>{i18n.t('glossary:challengesTitle')}</StyledTitle>
                    <ChallengesTable showChallengeDetails={this.showChallengeDetails} data={this.props.tableData} />
                </div>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Props, 'state' | 'tableData'> {
    const tableData = selectors.getChallengesTableData(state);

    return { state: state.challenges, tableData };
}

function mapDispatchToProps(dispatch: Dispatch<RootState.ChallengeState>):
    Pick<Props, 'challengeActions' | 'ratingActions' | 'submissionActions'> {
    return {
        challengeActions: bindActionCreators(omit(ChallengeActions, 'Type'), dispatch),
        ratingActions: bindActionCreators(omit(RatingActions, 'Type'), dispatch),
        submissionActions: bindActionCreators(omit(SubmissionActions, 'Type'), dispatch)
    };
}