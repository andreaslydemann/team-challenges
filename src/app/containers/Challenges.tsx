import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { ChallengeActions } from '../actions';
import { RootState } from '../reducers';
import { ChallengeModel } from '../models';
import * as selectors from '../selectors';
import { Skeleton } from 'antd';
import { MainLayout, ChallengesTable, StyledTitle } from '../components';
import i18n from '../strings/i18n';
import { omit } from '../utils';

interface Props extends RouteComponentProps<void> {
    challengesTableData: ChallengeModel.ChallengesTableData[];
    state: RootState.ChallengeState;
    challengeActions: ChallengeActions;
}

@connect(mapStateToProps, mapDispatchToProps)
export class Challenges extends React.Component<Props> {
    constructor(props: Props, context?: any) {
        super(props, context);
    }

    componentDidMount() {
        const teamId = "123t";
        this.props.challengeActions.initChallenges(teamId);
    }

    showChallengeDetails = (key: string) => { this.props.history.push('/challenges/' + key) }

    render() {
        return (
            <MainLayout location={location}>
                <div>
                    <StyledTitle>{i18n.t('glossary:challengesTitle')}</StyledTitle>
                    {this.props.state.loading ? (
                        <Skeleton active={true} />
                    ) : (
                            <ChallengesTable
                                showChallengeDetails={this.showChallengeDetails}
                                data={this.props.challengesTableData}
                            />
                        )}
                </div>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Props, 'state' | 'challengesTableData'> {
    return { state: state.challenges, challengesTableData: selectors.getChallengesTableData(state) };
}

function mapDispatchToProps(dispatch: Dispatch<RootState.ChallengeState>): Pick<Props, 'challengeActions'> {
    return { challengeActions: bindActionCreators(omit(ChallengeActions, 'Type'), dispatch) };
}