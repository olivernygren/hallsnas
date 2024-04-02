import React from 'react';
import Section from '../components/section/Section';
import { HeadingsTypography, NormalTypography, SubHeadingsTypography } from '../components/typography/Typography';
import Button from '../components/buttons/Button';
import { ArrowSquareOut, Envelope, Phone } from '@phosphor-icons/react';
import { SectionTextContainer, PlainLink, SectionImage, Paragraphs } from './SectionStyles';
import styled from 'styled-components';
import theme from '../theme';

const OtherInfoSection = () => {
  return (
    <Section background="grey">
      <SectionImage src="/images/outdoor_image.png" alt="Bild 1" />
      <SectionTextContainer>
        <HeadingsTypography>Övrig info</HeadingsTypography>
        <Paragraphs spacing='small'>
          <SubHeadingsTypography>
            Parkering
          </SubHeadingsTypography>
          <NormalTypography>
            På Hällsnäs parkerar du gratis. De har parkering både utanför och innanför grindarna. Grindarna hålls alltid öppna.
          </NormalTypography>
        </Paragraphs>
        <Paragraphs spacing="small">
          <SubHeadingsTypography>
            Har du frågor?
          </SubHeadingsTypography>
          <NormalTypography>
            Om du har frågor eller funderingar är du varmt välkommen att kontakta Hallnäs via e-post eller telefon.
          </NormalTypography>
          <ContactInfo>
            <ContactInfoItem>
              <Envelope size={24} color={theme.colors.gold.regular} />
              <PlainLink href="mailto:info@hallsnas.se">
                <LinkText>info@hallsnas.se</LinkText>
              </PlainLink>
            </ContactInfoItem>
            <ContactInfoItem>
              <Phone size={24} color={theme.colors.gold.regular} />
              <PlainLink href="tel:+4631916466">
                <LinkText>+46 319 164 66</LinkText>
              </PlainLink>
            </ContactInfoItem>
          </ContactInfo>
        </Paragraphs>
      </SectionTextContainer>
    </Section>
  )
};

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.xs};
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs}
`;

const LinkText = styled.b`
  font-size: 18px;
`;

export default OtherInfoSection;