import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import i18n from '../strings/i18n';

interface Props {
    location: Location
}

export function Header({ location }: Props) {
    return (
        <StyledHeader>
            <Link to="/challenges"><StyledLogo /></Link>
            <StyledMenu
                className="menu"
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[location.pathname]}
            >
                <StyledMenuItem key="/challenges">
                    <Link to="/challenges"><Icon type="schedule" />{i18n.t('common:headerItemChallenges')}</Link>
                </StyledMenuItem>
                <StyledMenuItem key="/teams">
                    <Link to="/teams"><Icon type="team" />{i18n.t('common:headerItemTeams')}</Link>
                </StyledMenuItem>
                <StyledRightMenuItem key="/sign-in">
                    <Link to="/sign-in"><Icon type="arrow-right" />{i18n.t('common:headerItemSignOut')}</Link>
                </StyledRightMenuItem>
            </StyledMenu>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
max-height: 64px;
max-width: 1366px;
overflow: hidden;
margin: auto;
`
const StyledLogo = styled.div`
width: 120px;
height: 31px;
float: left;
margin: 16px 28px 16px 0;
background: rgba(255,255,255,.2);
`
const StyledMenu = styled(Menu)`
text-align: center;
`
const StyledMenuItem = styled(Menu.Item)`
line-height: 64px;
background-color: transparent;
`
const StyledRightMenuItem = styled(StyledMenuItem)`
float: right;
`