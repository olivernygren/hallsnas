import React from 'react'
import Section from '../components/section/Section'
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography'
import styled from 'styled-components';
import theme from '../theme';
import Button from '../components/buttons/Button';
import { ArrowSquareOut } from '@phosphor-icons/react';

const AboutSection = () => {
  return (
    <Section background="white">
      <TextContainer>
        <HeadingsTypography>Om Hallsnäs</HeadingsTypography>
        <NormalTypography>
          Välkommen till Hallsnäs - beläget i den idylliska naturen i Göteborgs omgivningar, är Hallsnäs en magisk destination för vårt bröllop. Med sina grönskande skogar, glittrande sjöar och charmiga atmosfär erbjuder Hallsnäs en magisk kuliss för vårt speciella ögonblick. 
          Vi ser fram emot att dela denna vackra plats med våra nära och kära när vi utbyter våra löften och skapar minnen som kommer att vara eviga.
        </NormalTypography>
        <PlainLink href="https://hallsnas.se/" target='_blank'>
          <Button 
            color="gold"
            icon={<ArrowSquareOut size={20} />}
            fitContent
            >
            Läs mer
          </Button>
        </PlainLink>
      </TextContainer>
      <Image src="/images/about_image.png" alt="Bild 1" />
    </Section>
  )
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.l};
  max-width: 500px;
`;

const Image = styled.img`
  height: 400px;
  aspect-ratio: 5/6;
  object-fit: cover;
  border-radius: 6px;
`;

const PlainLink = styled.a`
  text-decoration: none;
`;

export default AboutSection