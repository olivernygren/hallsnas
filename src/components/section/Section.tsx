import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

interface SectionProps {
  background: 'white' | 'grey';
  reverse?: boolean;
  children: React.ReactNode;
}

const Section = ({ background, reverse, children }: SectionProps) => {
  return (
    <Container background={background}>
      <Content reverse={reverse}>
        {children}
      </Content>
    </Container>
  )
};

const Container = styled.div<{ background: string }>`
  width: 100%;
  padding: ${theme.spacing.xxxxl} ${theme.spacing.m};
  background-color: ${({ background }) => background === 'white' ? theme.colors.common.white : theme.colors.grey.light};
`;

const Content = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  gap: ${theme.spacing.l};
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  height: fit-content;
`;

export default Section;