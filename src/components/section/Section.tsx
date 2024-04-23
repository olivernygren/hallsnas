import React from 'react';
import styled from 'styled-components';
import theme, { devices } from '../../theme';

interface SectionProps {
  id: string;
  background: 'white' | 'grey';
  reverse?: boolean;
  centerVertically?: boolean;
  children: React.ReactNode;
}

const Section = ({ id, background, reverse, centerVertically, children }: SectionProps) => {
  return (
    <Container background={background} id={id}>
      <Content reverse={reverse} centerVertically={centerVertically}>
        {children}
      </Content>
    </Container>
  )
};

const Container = styled.div<{ background: string }>`
  width: 100%;
  padding: ${theme.spacing.xxl} ${theme.spacing.m};
  background-color: ${({ background }) => background === 'white' ? theme.colors.common.white : theme.colors.grey.light};

  @media ${devices.tablet} {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.m};
  }
`;

const Content = styled.div<{ reverse?: boolean, centerVertically?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  max-width: 100%;
  gap: ${theme.spacing.xl};
  margin: 0 auto;
  height: fit-content;
  
  @media ${devices.tablet} {
    flex-direction: row;
    gap: ${theme.spacing.l};
    justify-content: space-between;
    max-width: 1000px;
    align-items: ${({ centerVertically }) => (centerVertically ? 'center' : 'flex-start')};
  }
`;

export default Section;