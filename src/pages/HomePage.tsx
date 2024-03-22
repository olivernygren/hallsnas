import React from 'react'
import styled from 'styled-components';
import theme from '../theme';
import PageHeader from '../components/header/Header';

const HomePage = () => {
  return (
    <RootContainer>
      <PageHeader />
    </RootContainer>
  )
}

const RootContainer = styled.div`
  background-color: ${theme.colors.grey.light};
  min-height: 200vh;
  position: relative;
`;

export default HomePage;