import React from 'react';
import Section from '../components/section/Section';
import { HeadingsTypography, NormalTypography, SubHeadingsTypography } from '../components/typography/Typography';
import Button from '../components/buttons/Button';
import { ArrowSquareOut, Phone } from '@phosphor-icons/react';
import { SectionTextContainer, PlainLink, SectionImage, Paragraphs } from './SectionStyles';
import styled from 'styled-components';
import theme from '../theme';

const AccommodationSection = () => {
  return (
    <Section background="white" id='boende' reverse>
      <SectionTextContainer>
        <HeadingsTypography>Boende</HeadingsTypography>
        <Paragraphs spacing="normal">
          <NormalTypography>
            För den som vill sova över på hotellet, så är samtliga rummen på hotellet bokade för oss. Boendet är utan kostnad för våra gäster.
          </NormalTypography>
          <Paragraphs spacing='small'>
            <SubHeadingsTypography>
              Tider & bokning
            </SubHeadingsTypography>
            <NormalTypography>
              Incheckning 15:00, utcheckning 11:00.
            </NormalTypography>
          </Paragraphs>
          <NormalTypography>
            Kontakta hotellet på telefon för att boka.
          </NormalTypography>
          <ContactInfoItem>
            <Phone weight='fill' size={24} color={theme.colors.gold.regular} />
            <PlainLink href="tel:+4631916466">
              <LinkText>+46 319 164 66</LinkText>
            </PlainLink>
          </ContactInfoItem>
        </Paragraphs>
        <PlainLink href="https://hallsnas.se/bo/" target='_blank'>
          <Button 
            color="gold"
            icon={<ArrowSquareOut size={20} />}
            fitContent
            >
            Läs mer
          </Button>
        </PlainLink>
      </SectionTextContainer>
      <SectionImage src="/images/room_image.png" alt="Bild 1" />
    </Section>
  )
};

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs}
`;

const LinkText = styled.b`
  font-size: 18px;
`;

export default AccommodationSection