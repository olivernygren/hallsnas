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
            För de som kommer fram till Hallsnäs lördag förmiddag finns en rad spännande aktiviteter. Ni kan koppla av på bastuflotten och i badtunnan, paddla kanot, spela shuffleboard eller biljard, prova olika drycker som vin, whisky och gin, eller till och med laga mat tillsammans med en kock. För de som önskar att träna finns både utomhus- och inomhusgym, samt möjligheten att spela boule eller kubb. Valet är ditt!
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