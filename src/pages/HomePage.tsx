import React from 'react'
import styled from 'styled-components';
import theme from '../theme';
import PageHeader from '../components/header/Header';
import Hero from '../components/hero/Hero';
import AboutSection from '../sections/About';
import TimesSection from '../sections/Times';

const HomePage = () => {
  return (
    <RootContainer>
      <PageHeader />
      <Hero />
      <AboutSection />
      <TimesSection />
    </RootContainer>
  )
}

const RootContainer = styled.div`
  background-color: ${theme.colors.grey.light};
  min-height: 200vh;
  position: relative;
`;

export default HomePage;