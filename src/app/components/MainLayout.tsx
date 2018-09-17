import * as React from 'react';
import { Layout, BackTop } from 'antd';
import { Header } from './Header';
import { Footer } from './Footer';
import styled from 'styled-components'

interface Props {
    children: JSX.Element,
    location: Location
};

export function MainLayout({
    children, location
}: Props) {
    return (
        <StyledLayout>
            <Layout.Header className="header">
                <Header location={location} />
            </Layout.Header>
            <StyledLayoutContent>
                <StyledContainer>
                    {children}
                </StyledContainer>
                <BackTop />
            </StyledLayoutContent>
            <Layout.Footer className="footer">
                <Footer />
            </Layout.Footer>
        </StyledLayout>
    );
}

const StyledLayout = styled(Layout)`
height: 100vh;
`
const StyledLayoutContent = styled(Layout.Content)`
padding: 0 50px;
background: #fff;
`
const StyledContainer = styled.div`
min-height: 520px;
max-width: 1366px;
padding: 24px;
margin: auto;
`