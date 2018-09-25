import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { ChallengeActions, SubmissionActions } from '../actions';
import { RootState } from '../reducers';
import { Upload, Button, message, Icon } from 'antd';
import { MainLayout, StyledTitle, StyledDescription } from '../components';
import { omit } from '../utils';
import i18n from '../strings/i18n';
import { ChallengeModel } from '../models';

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
        // const { file } = this.props.state.challengeDetails;
        // const formData = new FormData();
        // formData.append('file', file);
        // formData is data for post request

        // call upload action (submissionActions) (param: file)
        // - should dispatch {type: upload_file, payload: true (uploading)

        // upload file (axios)
        // - should dispatch either UPLOAD_FILE_SUCCESS (payload: false) or UPLOAD_FILE_FAIL (payload: false)

        // this.props.history.replace("/challenges/" + this.props.match.params.id)
    }

    render() {
        const { name, description, file } = this.props.challengeState.challengeDetails;
        const { uploading } = this.props.submissionState;

        const uploadConfig = {
            action: '',
            multiple: false,
            beforeUpload: (beforeUploadFile: any) => {
                this.props.challengeActions.selectFile(beforeUploadFile);
                return false;
            },
            onChange(info: any) {
                const { status } = info.file;

                if (status === 'done')
                    message.success(`${info.file.name} ${i18n.t('validation:submissionUploadSuccess')}`);
                else if (status === 'error')
                    message.error(`${info.file.name} ${i18n.t('validation:submissionUploadFail')}`);
            },
            onRemove: () => { this.props.challengeActions.removeFile() },
            fileList: file ? [file] as ChallengeModel.ChallengeDetailsModel[] : [] as any[]
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
                                    style={ButtonStyle}>{uploading ? 'Uploading' : i18n.t('common:uploadSubmissionButton')}</Button>
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