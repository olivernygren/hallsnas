import React from 'react';
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography';
import Section from '../components/section/Section';
import { SectionTextContainer, PlainLink, SectionImage, Paragraphs } from './SectionStyles';

const TimesSection = () => {
  return (
    <Section background="grey" id='tider'>
      <SectionImage src="/images/time_image.png" alt="Bild 1" shadow />
      <SectionTextContainer>
        <HeadingsTypography>Tider</HeadingsTypography>
        <Paragraphs spacing="normal">
          <NormalTypography>
            Lorem ipsum dolor sit amet consectetur. Risus ornare arcu fringilla ultrices nibh enim. Eu pellentesque eleifend fusce tristique pulvinar. Ac scelerisque libero suspendisse eu tempor tortor. Mattis amet nunc faucibus non nisi tellus enim. Faucibus enim hendrerit posuere senectus. Ut fusce risus lorem nec nec id. Justo elementum turpis id non ac. 
          </NormalTypography>
          <NormalTypography>
            Vitae facilisis nunc id varius proin tempus ac tristique. Ridiculus eget penatibus lacinia justo suscipit a. Enim nec lacus lectus bibendum fermentum in.
          </NormalTypography>
        </Paragraphs>
      </SectionTextContainer>
    </Section>
  )
};

export default TimesSection