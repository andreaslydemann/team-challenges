import * as React from 'react';
import styled from 'styled-components'
import i18n from '../strings/i18n';
import { Table, Input, Button, Icon } from 'antd';

interface Props {
    data: object[]
}

interface State {
    searchText: any;
}

export class ChallengesTable extends React.Component<Props, State> {
    constructor(props: Props, context?: any) {
        super(props, context);
    }

    render() {
        this.state = {
            searchText: '',
        };

        let searchInput: any;

        const handleSearch = (selectedKeys: number[], confirm: () => void) => () => {
            confirm();
            this.setState({ searchText: selectedKeys[0] });
        }

        const handleReset = (clearFilters: () => void) => () => {
            clearFilters();
            this.setState({ searchText: '' });
        }

        const columns = [{
            title: i18n.t('common:tableColumnName'),
            dataIndex: 'name',
            key: 'name',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }:
                { setSelectedKeys: (array: any[]) => any, selectedKeys: number[], confirm: () => void, clearFilters: () => void }) => (
                    <StyledContainer>
                        <Input
                            ref={ele => searchInput = ele}
                            placeholder={i18n.t('common:searchNamePlaceholder')}
                            value={selectedKeys[0]}
                            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                            onPressEnter={handleSearch(selectedKeys, confirm)}
                            style={InputStyle}
                        />
                        <Button
                            type="primary"
                            onClick={handleSearch(selectedKeys, confirm)}
                            style={ButtonStyle}
                        >
                            {i18n.t('common:search')}
                        </Button>
                        <Button
                            onClick={handleReset(clearFilters)}
                            style={ButtonStyle}
                        >
                            {i18n.t('common:reset')}
                        </Button>
                    </StyledContainer>
                ),
            filterIcon: (filtered: boolean) => <Icon type="search" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
            onFilter: (value: string, record: any) => record.name.toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible: boolean) => {
                if (visible) {
                    setTimeout(() => {
                        searchInput.focus();
                    });
                }
            },
            render: (text: string) => {
                const { searchText } = this.state;

                return searchText ? (
                    <span>
                        {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                            fragment.toLowerCase() === searchText.toLowerCase()
                                ? <StyledSpan key={i}>{fragment}</StyledSpan> : fragment
                        ))}
                    </span>
                ) : text;
            },
        }, {
            title: i18n.t('common:tableColumnStatus'),
            dataIndex: 'status',
            key: 'status',
        }, {
            title: i18n.t('common:tableColumnTimeline'),
            dataIndex: 'timeline',
            key: 'timeline',
            render: (date: Date) => {
                if (date !== null) {
                    return <span>Completed {date.toDateString()}</span>
                } else { return <span /> }
            },
        }, {
            title: i18n.t('common:tableColumnScore'),
            dataIndex: 'scorePercentage',
            key: 'score',
            render: (score: number) => {
                if (score !== null) {
                    return <span>{score}%</span>
                } else { return <span /> }
            },
        }, {
            title: i18n.t('common:tableColumnComment'),
            dataIndex: 'comment',
            key: 'comment',
        }, {
            title: '',
            key: 'action',
            render: (text: string, record: any) => (
                <span>
                    <a href="javascript:;">{i18n.t('common:tableColumnShow')}</a>
                </span>
            ),
        }];

        return (
            <Table columns={columns} dataSource={this.props.data} />
        );
    }
}

const InputStyle = {
    width: '130px',
    marginRight: '8px'
}
const ButtonStyle = {
    boxShadow: '0 1px 6px rgba(0, 0, 0, .2)',
    marginRight: '8px'
}
const StyledContainer = styled.div`
padding: 8px;
border-radius: 6px;
background: #fff;
box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
`
const StyledSpan = styled.span`
color: #f50;
`