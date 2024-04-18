import React from 'react'
import styled from 'styled-components';
import theme from '../theme';
import PageHeader from '../components/header/Header';
import Hero from '../components/hero/Hero';
import AboutSection from '../sections/About';
import TimesSection from '../sections/Times';
import AccommodationSection from '../sections/Accommodation';
import ActivitiesSection from '../sections/Activities';
import FoodAndDrinkSection from '../sections/Food';
import OtherInfoSection from '../sections/OtherInfo';
import FindSection from '../sections/Find';

const HomePage = () => {
  return (
    <RootContainer>
      <PageHeader />
      <Hero />
      <AboutSection />
      <TimesSection />
      <AccommodationSection />
      <ActivitiesSection />
      <FoodAndDrinkSection />
      <OtherInfoSection />
      <FindSection />
    </RootContainer>
  )
}

const RootContainer = styled.div`
  background-color: ${theme.colors.grey.light};
  min-height: 200vh;
  position: relative;
`;

export default HomePage;