import React from 'react';
import Section from '../components/section/Section';
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography';
import Button from '../components/buttons/Button';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { SectionTextContainer, PlainLink, SectionImage, Paragraphs } from './SectionStyles';

const AccommodationSection = () => {
  return (
    <Section background="white" id='boende'>
      <SectionTextContainer>
        <HeadingsTypography>Boende</HeadingsTypography>
        <Paragraphs spacing="normal">
          <NormalTypography>
            För gäster som önskar stanna över på Hallsnäs under bröllopshelgen, finns det bekvämt boende tillgängligt för övernattning. Boendealternativen inkluderar mysiga rum och stugor, perfekta för att kunna koppla av efter en dag av firande. För att säkerställa tillgänglighet, rekommenderar vi att du bokar ditt boende i förväg. För bokningar och ytterligare information, vänligen kontakta oss.
          </NormalTypography>
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

export default AccommodationSection