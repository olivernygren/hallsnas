import { HandTap, MapPin } from '@phosphor-icons/react'
import React from 'react'
import Section from '../components/section/Section'
import { HeadingsTypography, NormalTypography, SubHeadingsTypography } from '../components/typography/Typography'
import { SectionTextContainer, Paragraphs } from './SectionStyles'
import styled from 'styled-components'
import theme from '../theme'

const FindSection = () => {
  return (
    <Section background="white">
      <SectionTextContainer narrow>
        <HeadingsTypography>Hitta hit</HeadingsTypography>
        <Paragraphs spacing="normal">
          <NormalTypography>
            Hallsnäs är beläget öster om Mölnlycke intill Landvettersjön, endast 20 minuter från Göteborg.
          </NormalTypography>
        </Paragraphs>
        <Address>
          <AddressLineOne>
            <MapPin weight='fill' size={24} color={theme.colors.gold.regular} />
            <NormalTypography>Långenäsvägen 150</NormalTypography>
          </AddressLineOne>
          <AddressLineTwo>
            <NormalTypography>435 35 Mölnlycke</NormalTypography>
          </AddressLineTwo>
        </Address>
      </SectionTextContainer>
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16490.16266394916!2d12.161587228056524!3d57.67617231244421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff0a3985580e5%3A0x7401962cf20fc0fb!2sH%C3%A4llsn%C3%A4s%20Hotell%20%26%20Restaurang!5e0!3m2!1ssv!2sse!4v1713460619651!5m2!1ssv!2sse" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Map>
    </Section>
  )
}

const Address = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressLineOne = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs};
`;

const AddressLineTwo = styled.div`
  padding-left: ${theme.spacing.l};
`;

const Map = styled.iframe`
  border: none;
  height: 400px;
  width: 500px;
  border-radius: 4px;
`;

export default FindSection