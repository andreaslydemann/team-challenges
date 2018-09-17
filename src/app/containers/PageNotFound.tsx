import * as React from 'react';
import { MainLayout } from '../components';
import styled from 'styled-components';
import img from '../../assets/yay.jpg';

interface Props {
    children: JSX.Element,
    location: Location
};

export function PageNotFound({
    location
}: Props) {
    return (
        <MainLayout location={location}>
            <StyledContainer>
                <StyledTitle>Page was not found!</StyledTitle>
                <StyledImage />
            </StyledContainer>
        </MainLayout>
    );
}

const StyledContainer = styled.div`
font-family: Georgia, sans-serif;
text-align: center;
`
const StyledTitle = styled.h1`
font-size: 2.5rem;
font-weight: normal;
letter-spacing: -1px;
`
const StyledImage = styled.div`
height: 328px;
background: url(${img}) no-repeat center 0;
background-size: 388px 328px;
`