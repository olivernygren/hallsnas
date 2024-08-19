import React, { useState } from 'react'
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
import QuestionFormSection from '../sections/QuestionForm';
import Footer from '../sections/Footer';
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography';

const passwordKey = 'abcdefgh';

const HomePage = () => {
  const [password, setPassword] = useState('');
  
  if (window.location.href.includes(passwordKey)) {
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
        <QuestionFormSection />
        <Footer />
      </RootContainer>
    )
  }

  return (
    <PasswordContainer>
      <NormalTypography>Ange lösenord för att få åtkomst till sidan.</NormalTypography>
      <NormalTypography>Kontakta Sara eller Chrille för lösenord</NormalTypography>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (password === passwordKey) {
          window.location.href = `${window.location.href}?${passwordKey}`;
        } else {
          alert('Fel lösenord');
        }
      }}>
        <input 
          type="text" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Bekräfta</button>
      </form>
    </PasswordContainer>
  )
}

const RootContainer = styled.div`
  background-color: ${theme.colors.grey.light};
  min-height: 200vh;
  position: relative;
  overflow-x: hidden;
`;

const PasswordContainer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing.s};
`;

export default HomePage;