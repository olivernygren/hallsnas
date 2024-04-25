import React from 'react';
import Section from '../components/section/Section';
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography';
import Button from '../components/buttons/Button';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { SectionTextContainer, PlainLink, SectionImage, Paragraphs } from './SectionStyles';

const AboutSection = () => {
  return (
    <Section background="white" id='om-hallsnas' reverse>
      <SectionTextContainer>
        <HeadingsTypography>Om Hällsnäs</HeadingsTypography>
        <Paragraphs spacing="normal">
          <NormalTypography>
            Välkommen till Hällsnäs - beläget i den idylliska naturen i Göteborgs omgivningar, är Hällsnäs en magisk destination för vår bröllopsfest. Med sina grönskande skogar, glittrande sjöar och charmiga atmosfär erbjuder Hällsnäs en magisk kuliss för vårt speciella ögonblick. 
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
