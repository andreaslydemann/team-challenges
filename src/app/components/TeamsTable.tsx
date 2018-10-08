import * as React from 'react';
import styled from 'styled-components';
import { Table, Input, Button, Icon } from 'antd';
import i18n from '../../assets/translations/i18n';

interface Props {
    data: object[],
    showChallengeDetails?: ((record: any) => void)
}

interface State {
    searchText: any;
}

export class TeamsTable extends React.Component<Props, State> {
    constructor(props: Props, context?: any) {
        super(props, context);
    }

    renderButtons = (key: string) => {
        return (
            <Button onClick={() => this.props.showChallengeDetails(key)}>
                Request to join
            </Button>
        );
    };

    render() {
        this.state = { searchText: '' };
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
            width: '55%',
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
                            {i18n.t('common:searchButton')}
                        </Button>
                        <Button
                            onClick={handleReset(clearFilters)}
                            style={ButtonStyle}
                        >
                            {i18n.t('common:resetButton')}
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
            title: i18n.t('common:tableColumnNumberOfMembers'),
            dataIndex: 'numberOfMembers',
            key: 'numberOfMembers',
            width: '25%',
            render: (numberOfMembers: number) => {
                if (numberOfMembers !== null) {
                    return <span>{numberOfMembers} {numberOfMembers === 1 ?
                        i18n.t('common:tableCellMember') : i18n.t('common:tableCellMembers')}</span>
                } else { return <span /> }
            },
        }, {
            title: '',
            key: 'action',
            dataIndex: '',
            render: (text: string, record: any) => this.renderButtons(record.key)
        }];

        return (
            <Table
                key="id"
                columns={columns}
                expandedRowRender={record => <p style={{ margin: 0 }}>{record.numberOfMembers}</p>}
                dataSource={this.props.data}
            />
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