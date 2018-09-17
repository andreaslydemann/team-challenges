import * as React from 'react';
import i18n from '../strings/i18n';
import styled from 'styled-components'

export function Footer() {
    return (
        <StyledFooter>
            {i18n.t('glossary:footer')}
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    text-align: center;
`