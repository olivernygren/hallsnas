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
            Det kommer att serveras en trerätters bröllopsmeny med fisk till varmrätt. Meddela eventuella allergier i samband med OSA. 
          </NormalTypography>
        </Paragraphs>
      </SectionTextContainer>
      <SectionImage src="/images/food_image.png" alt="Bild 1" />
    </Section>
  )
};

export default FoodAndDrinkSection;