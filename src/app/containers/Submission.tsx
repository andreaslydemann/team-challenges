import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { ChallengeActions } from '../actions';
import { RootState } from '../reducers';
import { MainLayout, StyledTitle, StyledDescription } from '../components';
import { omit } from '../utils';
import i18n from '../strings/i18n';
import { Upload, Button, message, Icon } from 'antd';

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    state: RootState.ChallengeState;
    challengeActions: ChallengeActions;
}

@connect(mapStateToProps, mapDispatchToProps)
export class Submission extends React.Component<Props> {

    constructor(props: Props, context?: any) {
        super(props, context);
    }

    componentWillMount() {
        const { id } = this.props.match.params;

        this.props.challengeActions.getChallenge(id);
    }

    render() {
        const props = {
            name: 'file',
            multiple: true,
            action: '',
            onChange(info: any) {
                const status = info.file.status;
                
                if (status !== 'uploading')
                    console.log(info.file, info.fileList);

                if (status === 'done')
                    message.success(`${info.file.name} ${i18n.t('validation:submissionUploadSuccess')}`);
                else if (status === 'error')
                    message.error(`${info.file.name} ${i18n.t('validation:submissionUploadFail')}`);
            },
        };

        const Dragger = Upload.Dragger;

        return (
            <MainLayout location={location}>
                <div>
                    {this.props.state.error ? (
                        <StyledTitle>{this.props.state.error}</StyledTitle>
                    ) : (
                            <div>
                                <StyledTitle>Submit to {this.props.state.challenges[0].name}</StyledTitle>
                                <StyledDescription>{this.props.state.challenges[0].description}</StyledDescription>
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">{i18n.t('glossary:submissionUploadHint1')}</p>
                                    <p className="ant-upload-hint">{i18n.t('glossary:submissionUploadHint2')}</p>
                                </Dragger>
                                <Button
                                    onClick={() => { this.props.history.replace("/challenges/" + this.props.match.params.id) }}
                                    style={ButtonStyle}>{i18n.t('common:uploadSubmissionButton')}</Button>
                            </div>
                        )}
                </div>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Props, 'state'> {
    return { state: state.challenges };
}

function mapDispatchToProps(dispatch: Dispatch<RootState.ChallengeState>):
    Pick<Props, 'challengeActions'> {
    return {
        challengeActions: bindActionCreators(omit(ChallengeActions, 'Type'), dispatch)
    };
}

const ButtonStyle: React.CSSProperties = {
    float: 'right',
    marginTop: '15px',
    marginBottom: '15px'
};