import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { ChallengeActions, SubmissionActions } from '../actions';
import { RootState } from '../reducers';
import { Upload, Button, Icon, message } from 'antd';
import { MainLayout, StyledTitle, StyledDescription } from '../components';
import { omit } from '../utils';
import i18n from '../strings/i18n';

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    challengeState: RootState.ChallengeState;
    submissionState: RootState.SubmissionState;
    challengeActions: ChallengeActions;
    submissionActions: SubmissionActions;
}

@connect(mapStateToProps, mapDispatchToProps)
export class Submission extends React.Component<Props> {
    constructor(props: Props, context?: any) {
        super(props, context);
    }

    componentWillMount() {
        this.props.challengeActions.getChallenge(this.props.match.params.id);
    }

    handleUpload = () => {
        const file = this.props.challengeState.challengeDetails.file;
        const formData = new FormData();

        formData.append('file', JSON.stringify(file));

        this.props.submissionActions.submitFile(formData, () => {
            this.props.history.replace("/challenges/" + this.props.match.params.id)
        });
    }

    render() {
        const { name, description, file } = this.props.challengeState.challengeDetails;
        const { uploading, error } = this.props.submissionState;

        if (error !== '')
            message.error(i18n.t(error));

        const uploadConfig = {
            action: '',
            multiple: false,
            beforeUpload: (beforeUploadFile: any) => {
                this.props.challengeActions.selectFile(beforeUploadFile);
                return false;
            },
            onRemove: () => { this.props.challengeActions.removeFile() },
            fileList: file ? [file] as any[] : [] as any[]
        };

        return (
            <MainLayout location={location}>
                <div>
                    {this.props.challengeState.error ? (
                        <StyledTitle>{this.props.challengeState.error}</StyledTitle>
                    ) : (
                            <div>
                                <StyledTitle>{i18n.t('glossary:submissionTitle')} {name}</StyledTitle>
                                <StyledDescription>{description}</StyledDescription>
                                <Upload.Dragger {...uploadConfig}>
                                    <p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
                                    <p className="ant-upload-text">{i18n.t('glossary:submissionUploadHint1')}</p>
                                    <p className="ant-upload-hint">{i18n.t('glossary:submissionUploadHint2')}</p>
                                </Upload.Dragger>
                                <Button
                                    loading={uploading}
                                    disabled={!file}
                                    onClick={this.handleUpload}
                                    style={ButtonStyle}>
                                    {uploading ? i18n.t('common:uploadingSubmissionButton') :
                                        i18n.t('common:startUploadSubmissionButton')}
                                </Button>
                            </div>
                        )}
                </div>
            </MainLayout>
        );
    }
}

function mapStateToProps(state: RootState): Pick<Props, 'challengeState' | 'submissionState'> {
    return { challengeState: state.challenges, submissionState: state.submissions };
}

function mapDispatchToProps(dispatch: Dispatch<RootState.ChallengeState>): Pick<Props, 'challengeActions' | 'submissionActions'> {
    return {
        challengeActions: bindActionCreators(omit(ChallengeActions, 'Type'), dispatch),
        submissionActions: bindActionCreators(omit(SubmissionActions, 'Type'), dispatch)
    };
}

const ButtonStyle: React.CSSProperties = {
    float: 'right',
    marginTop: '15px'
};