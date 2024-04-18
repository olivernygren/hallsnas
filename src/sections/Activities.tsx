import React from 'react';
import Section from '../components/section/Section';
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography';
import Button from '../components/buttons/Button';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { SectionTextContainer, PlainLink, SectionImage, Paragraphs } from './SectionStyles';

const ActivitiesSection = () => {
  return (
    <Section background="grey" id='aktiviteter'>
      <SectionImage src="/images/boule_image.png" alt="Bild 1" />
      <SectionTextContainer>
        <HeadingsTypography>Aktiviteter</HeadingsTypography>
        <Paragraphs spacing="normal">
          <NormalTypography>
            Det finns en rad aktiviteter för den som vill utnyttja detta på förmiddagen innan incheckning, eller på söndagen, så som uteträning, kanot, bastu & spa, och vi har hela anläggningen för oss själva, både lördag och söndag.
          </NormalTypography>
        </Paragraphs>
        <PlainLink href="https://hallsnas.se/att-gora/" target='_blank'>
          <Button 
            color="gold"
            icon={<ArrowSquareOut size={20} />}
            fitContent
            >
            Läs mer
          </Button>
        </PlainLink>
      </SectionTextContainer>
    </Section>
  )
};

export default ActivitiesSection