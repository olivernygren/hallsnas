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
    <Section background="grey" id='ovrig-info' centerVertically>
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
        <Paragraphs spacing='small'>
          <SubHeadingsTypography>
            Klädkod
          </SubHeadingsTypography>
          <NormalTypography>
            Något du känner dig sommarfin i 😊
          </NormalTypography>
        </Paragraphs>
        <Paragraphs spacing="small">
          <SubHeadingsTypography>
            Toastmadame Malin Lindberg
          </SubHeadingsTypography>
          <ContactInfoItem>
            <Envelope weight='regular' size={24} color={theme.colors.gold.regular} />
            <PlainLink href="mailto:malin.lindberg.se@gmail.com">
              <LinkText>malin.lindberg.se@gmail.com</LinkText>
            </PlainLink>
          </ContactInfoItem>
          <ContactInfoItem>
            <Phone weight='regular' size={24} color={theme.colors.gold.regular} />
            <PlainLink href="tel:0721777861">
              <LinkText>0721-77 78 61</LinkText>
            </PlainLink>
          </ContactInfoItem>
        </Paragraphs>
        <Paragraphs spacing="small">
          <SubHeadingsTypography>
            Toastmaster Daniel Hoffman
          </SubHeadingsTypography>
          <ContactInfoItem>
            <Envelope weight='regular' size={24} color={theme.colors.gold.regular} />
            <PlainLink href="mailto:hoffa40@hotmail.com">
              <LinkText>hoffa40@hotmail.com</LinkText>
            </PlainLink>
          </ContactInfoItem>
          <ContactInfoItem>
            <Phone weight='fill' size={24} color={theme.colors.gold.regular} />
            <PlainLink href="tel:0705480978">
              <LinkText>0705-48 09 78</LinkText>
            </PlainLink>
          </ContactInfoItem>
        </Paragraphs>
        {/* <Paragraphs spacing="small">
          <SubHeadingsTypography>
            Har du frågor?
          </SubHeadingsTypography>
          <NormalTypography>
            Om du har frågor eller funderingar är du varmt välkommen att kontakta Hällsnäs via e-post eller telefon.
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
        </Paragraphs> */}
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

const LinkText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export default OtherInfoSection;