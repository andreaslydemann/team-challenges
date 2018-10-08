import * as React from 'react';
import { MainLayout, StyledTitle } from '../components';
import styled from 'styled-components';
import i18n from '../../assets/translations/i18n';
import img from '../../assets/images/yay.jpg';

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
                <StyledTitle>{i18n.t('validation:pageNotFound')}</StyledTitle>
                <StyledImage />
            </StyledContainer>
        </MainLayout>
    );
}

const StyledContainer = styled.div`
font-family: Georgia, sans-serif;
text-align: center;
`
const StyledImage = styled.div`
height: 328px;
background: url(${img}) no-repeat center 0;
background-size: 388px 328px;
`