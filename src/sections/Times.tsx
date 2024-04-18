import React from 'react';
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography';
import Section from '../components/section/Section';
import { SectionTextContainer, PlainLink, SectionImage, Paragraphs } from './SectionStyles';
import { Paragraph } from '@phosphor-icons/react/dist/ssr';
import styled from 'styled-components';
import theme from '../theme';

const TimesSection = () => {
  const getTime = (time: string, activity: string) => (
    <Time>
      <NormalTypography>{time}</NormalTypography>
      <NormalTypography>{activity}</NormalTypography>
    </Time>
  );

  return (
    <Section background="grey" id='tider'>
      <SectionImage src="/images/time_image.png" alt="Bild 1" shadow />
      <SectionTextContainer>
        <HeadingsTypography>Tider</HeadingsTypography>
        <Paragraphs spacing="normal">
          {getTime('15:00', 'Incheck på hotellet')}
          {getTime('16:30', 'Brudskål')}
          {getTime('17:30', 'Till bords')}
          {getTime('22:00', 'Baren och dansgolvet öppnar')}
          {getTime('01:00', 'Nattamat')}
          {getTime('02:00', 'Anläggningen stänger och sensommarnatten rundas av, eller fortsätts någon annan stans 😄')}
        </Paragraphs>
      </SectionTextContainer>
    </Section>
  )
};

const Time = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
`;

export default TimesSection