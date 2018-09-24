import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { ChallengeActions } from '../actions';
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
    challengesTableData: ChallengeModel.ChallengeDetailsTableData[];
    state: RootState.ChallengeState;
    challengeActions: ChallengeActions;
}

@connect(mapStateToProps, mapDispatchToProps)
export class ChallengeDetails extends React.Component<Props> {
    constructor(props: Props, context?: any) {
        super(props, context);
    }

    componentDidMount() {
        this.props.challengeActions.initChallengeDetails(this.props.match.params.id);
    }

    render() {
        return (
            <MainLayout location={location}>
                <div>
                    {this.props.state.error ? (
                        <StyledTitle>{i18n.t(this.props.state.error)}</StyledTitle>
                    ) : (
                            <div>
                                <StyledTitle>{this.props.state.challenges[0].name}</StyledTitle>
                                <StyledDescription>{this.props.state.challenges[0].description}</StyledDescription>
                                <ChallengesTable
                                    isChallengeDetailsTable={true}
                                    data={this.props.challengesTableData} />
                                <Button
                                    onClick={() => { this.props.history.push(this.props.location.pathname + '/submission') }}
                                    style={ButtonStyle}>{i18n.t('common:submissionButton')}</Button>
                            </div>
                        )}
                </div>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Props, 'state' | 'challengesTableData'> {
    return { state: state.challenges, challengesTableData: selectors.getChallengeDetailsTableData(state) };
}

function mapDispatchToProps(dispatch: Dispatch<RootState.ChallengeState>): Pick<Props, 'challengeActions'> {
    return { challengeActions: bindActionCreators(omit(ChallengeActions, 'Type'), dispatch) };
}

const ButtonStyle: React.CSSProperties = {
    float: "right",
    width: "112px",
    marginBottom: "15px"
};