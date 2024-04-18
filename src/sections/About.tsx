import React from 'react';
import Section from '../components/section/Section';
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography';
import Button from '../components/buttons/Button';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { SectionTextContainer, PlainLink, SectionImage, Paragraphs } from './SectionStyles';

const AboutSection = () => {
  return (
    <Section background="white" id='om-hallsnas'>
      <SectionTextContainer>
        <HeadingsTypography>Om Hallsnäs</HeadingsTypography>
        <Paragraphs spacing="normal">
          <NormalTypography>
            Välkommen till Hallsnäs - beläget i den idylliska naturen i Göteborgs omgivningar, är Hallsnäs en magisk destination för vårt bröllop. Med sina grönskande skogar, glittrande sjöar och charmiga atmosfär erbjuder Hallsnäs en magisk kuliss för vårt speciella ögonblick. 
          </NormalTypography>
          <NormalTypography>
            Vi ser fram emot att dela denna vackra plats med våra nära och kära när vi utbyter våra löften och skapar minnen som kommer att vara eviga.
          </NormalTypography>
        </Paragraphs>
        <PlainLink href="https://hallsnas.se/" target='_blank'>
          <Button 
            color="gold"
            icon={<ArrowSquareOut size={20} />}
            fitContent
            >
            Läs mer
          </Button>
        </PlainLink>
      </SectionTextContainer>
      <SectionImage src="/images/about_image.png" alt="Bild 1" />
    </Section>
  )
};

export default AboutSection