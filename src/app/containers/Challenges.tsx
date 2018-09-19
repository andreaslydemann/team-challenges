import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { ChallengeActions, RatingActions, SubmissionActions } from '../actions';
import { RootState } from '../reducers';
import { MainLayout, ChallengesTable } from '../components';
import * as selectors from '../selectors';
import styled from 'styled-components'
import i18n from '../strings/i18n';
import { omit } from '../utils';
import { ChallengeModel } from '../models';

interface Props extends RouteComponentProps<void> {
    tableData: ChallengeModel.ChallengeTableData[];
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
        this.props.ratingActions.getRatingsOfTeam("123t")
        this.props.submissionActions.getSubmissionsOfTeam("123t")
    }

    render() {
        return (
            <MainLayout location={location}>
                <StyledContainer>
                    <StyledTitle>{i18n.t('glossary:challengesTitle')}</StyledTitle>
                    <ChallengesTable data={this.props.tableData} />
                </StyledContainer>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Props, 'state' | 'tableData'> {
    const tableData = selectors.getChallengeTableData(state);

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

const StyledContainer = styled.div`
font-family: Georgia, sans-serif;
`
const StyledTitle = styled.h1`
font-size: 2.5rem;
font-weight: normal;
letter-spacing: -1px;
`