import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import theme from '../../theme';
import { Circle, Heart } from '@phosphor-icons/react';

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
          <h2>Hallsnäs Hotell & Restaurang</h2>
          <Circle size={4} weight='fill' />
          <ThinH2>10 augusti 2024</ThinH2>
        </SubheadingContainer>
      </Content>
      <ImageContainer>
        <Image src="/images/image_1.png" alt='Bild 1' />
        <Image src="/images/image_2.png" alt='Bild 2' />
        <Image src="/images/image_3.png" alt='Bild 3' />
        <Image src="/images/image_4.png" alt='Bild 4' />
      </ImageContainer>
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
    </Container>
  )
}

const Container = styled.div`
  padding-top: 180px;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SubheadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${theme.spacing.l};
  gap: ${theme.spacing.l};
`;

const ThinH2 = styled.h2`
  font-weight: 400;
`;

const ImageContainer = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.l};
  margin-top: ${theme.spacing.xxxxl};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s};
  max-width: 1000px;
  margin: ${theme.spacing.xxxl} auto;
`;

const Countdown = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xxl};
  align-items: center;
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
  font-size: 60px;
  font-weight: 800;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const TimeText = styled.p`
  font-size: 22px;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export default Hero;