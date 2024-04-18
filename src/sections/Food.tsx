import React from 'react';
import Section from '../components/section/Section';
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography';
import Button from '../components/buttons/Button';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { SectionTextContainer, PlainLink, SectionImage, Paragraphs } from './SectionStyles';

const FoodAndDrinkSection = () => {
  return (
    <Section background="white" id='mat-och-dryck'>
      <SectionTextContainer>
        <HeadingsTypography>Mat & dryck</HeadingsTypography>
        <Paragraphs spacing="normal">
          <NormalTypography>
            Kockarna har satt samman en speciell bröllopsmeny som, tillsammans med väl valda drycker blir receptet på en oförglömlig dag. Bröllopsmiddagen kommer att avnjutas i den charmiga restaurangen Sjöö, med en oslagbar utsikt över Landvettersjön.
          </NormalTypography>
          <NormalTypography>
            Vi förstår vikten av att hantera eventuella allergier och matpreferenser. Om du har några specifika önskemål eller behov, var vänlig och kontakta oss i förväg så att menyerna kan anpassas efter dig.
          </NormalTypography>
        </Paragraphs>
        <PlainLink href="https://hallsnas.se/ata/" target='_blank'>
          <Button 
            color="gold"
            icon={<ArrowSquareOut size={20} />}
            fitContent
            >
            Menyer
          </Button>
        </PlainLink>
      </SectionTextContainer>
      <SectionImage src="/images/food_image.png" alt="Bild 1" />
    </Section>
  )
};

export default FoodAndDrinkSection;