import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import theme, { devices } from '../../theme';
import { Calendar, Circle, Heart, Info } from '@phosphor-icons/react';

const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const targetDate = new Date('August 10, 2024 15:00:00');
  
    const calculateCountdown = () => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
    };
  
    calculateCountdown();
  
    const intervalId = setInterval(calculateCountdown, 60000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  const getDivider = () => (
    <IconDivider>
      <DividerLine />
      <Heart size={24} color={theme.colors.gold.light} />
      <DividerLine />
    </IconDivider>
  )

  return (
    <Container>
      <Content>
        <h1>Bröllop Christian & Sara</h1>
        <SubheadingContainer>
          <h2>Hällsnäs Hotell & Restaurang</h2>
          <Circle size={4} weight='fill' />
          <ThinH2>10 augusti 2024</ThinH2>
        </SubheadingContainer>
        <SaveTheDateContainer>
          <Calendar size={36} color={theme.colors.gold.regular} />
          <h3>OSA 20 juni</h3>
        </SaveTheDateContainer>
      </Content>
      <LargeImage />
      <CountdownContainer>
        {getDivider()}
        <Countdown>
          <TimeContainer>
            <CountdownNumber>{days}</CountdownNumber>
            <TimeText>dagar</TimeText>
          </TimeContainer>
          <TimeContainer>
            <CountdownNumber>{hours}</CountdownNumber>
            <TimeText>timmar</TimeText>
          </TimeContainer>
          <TimeContainer>
            <CountdownNumber>{minutes}</CountdownNumber>
            <TimeText>minuter</TimeText>
          </TimeContainer>
        </Countdown>
        {getDivider()}
      </CountdownContainer>
      <ImageContainer>
      <Image src="/images/image_1-small.png" alt='Bild 1' />
      <Image src="/images/image_2-small.png" alt='Bild 2' />
      <ResponsiveImagesContainer>
        <Image src="/images/image_3-small.png" alt='Bild 3' />
        <Image src="/images/image_4-small.png" alt='Bild 4' />
      </ResponsiveImagesContainer>
      </ImageContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 140px;

  @media ${devices.tablet} {
    padding-top: 180px;
    padding-bottom: ${theme.spacing.xxxxl};
  }
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing.l};
  padding: 0 20px ${theme.spacing.xxxl} 20px;

  > h1 {
    font-size: 54px;
    text-align: center;
  }
  
  @media ${devices.tablet} {
    padding: 0 20px ${theme.spacing.xxxl} 0;

    > h1 {
      font-size: 80px;
      text-align: left;
    }
  }
`;

const SubheadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing.s};
  padding-top: ${theme.spacing.s};
  
  @media ${devices.tablet} {
    flex-direction: row;
    gap: ${theme.spacing.l};
    padding-top: 0;
  }
`;

const ThinH2 = styled.h2`
  font-weight: 400;
`;

const ImageContainer = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: ${theme.spacing.m};
  margin-top: ${theme.spacing.xxxl};
  
  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 1fr;
    gap: ${theme.spacing.l};
    width: 120%;
    margin-left: -10%;
    max-width: unset;
    transform: rotate(-5deg);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const LargeImage = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  
  background-image: url('/images/wedding.jpg');
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  
  @media ${devices.tablet} {
    height: 100vh;
    background-image: url('/images/wedding-large.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
  flex: 1;
  max-width: 1400px;
  margin: ${theme.spacing.xxxl} auto;
  padding: 0 20px;
  
  @media ${devices.tablet} {
    margin: ${theme.spacing.xxxxl} auto;
    padding: 0;
  }
`;

const Countdown = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.l};
  align-items: center;

  @media ${devices.tablet} {
    gap: ${theme.spacing.xxl};
  }
`;

const IconDivider = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s};
  width: 100%;
`;

const DividerLine = styled.div`
  height: 1px;
  background-color: ${theme.colors.gold.light};
  flex: 1;
`;

const CountdownNumber = styled.h2`
  font-size: 48px;
  font-weight: 800;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 1;

  @media ${devices.tablet} {
    font-size: 60px;
  }
`;

const TimeText = styled.p`
  font-size: 20px;

  @media ${devices.tablet} {
    font-size: 22px;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

const SaveTheDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.s};
  background-color: ${theme.colors.green.dark};
  padding: ${theme.spacing.xs} ${theme.spacing.m};
  margin-top: ${theme.spacing.l};
  border-radius: 8px;
  transform: rotate(-5deg);
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  transition: all 0.15s;
  box-sizing: border-box;

  &:hover {
    transform: rotate(0deg);
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  }
  
  > h3 {
    color: ${theme.colors.common.white};
    font-size: 24px;
    font-weight: 600;
  }

  @media ${devices.tablet} {
    margin-top: ${theme.spacing.xl};

    > h3 {
      font-size: 30px;
    }
  }
`;

const ResponsiveImagesContainer = styled.div`
  display: none;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.l};
  }
`;

export default Hero;