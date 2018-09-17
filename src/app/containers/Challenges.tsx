import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { ChallengeActions } from '../actions';
import { RootState } from '../reducers';
import { MainLayout } from '../components';
import styled from 'styled-components'
import i18n from '../strings/i18n';
// import { ChallengeModel } from '../models';
import { omit } from '../utils';

export namespace Challenges {
    export interface Props extends RouteComponentProps<void> {
        challenges: RootState.ChallengeState;
        actions: ChallengeActions;
    }
}

export class Challenges extends React.Component<Challenges.Props> {
    constructor(props: Challenges.Props, context?: any) {
        super(props, context);
    }

    render() {
        // const { challenges, actions } = this.props;

        return (
            <MainLayout location={location}>
                <StyledContainer>
                    <StyledTitle>{i18n.t('glossary:challengesTitle')}</StyledTitle>
                </StyledContainer>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Challenges.Props, 'challenges'> {
    return {
        challenges: state.challenges,
    };
}

function mapDispatchToProps(dispatch: Dispatch): Pick<Challenges.Props, 'actions'> {
    return {
        actions: bindActionCreators(omit(ChallengeActions, 'Type'), dispatch)
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

export default connect(mapStateToProps, mapDispatchToProps)(Challenges);