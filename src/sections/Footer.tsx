import React from 'react'
import styled from 'styled-components';
import theme, { devices } from '../theme';
import { PlainLink } from './SectionStyles';

const Footer = () => {
  return (
    <Container>
      <Content>
        <FancyTextWrapper>
          <FancyText>Vi hälsar er varmt välkomna till vår bröllopsfest på Hällsnäs!</FancyText>
          <Signature>/Christian & Sara</Signature>
        </FancyTextWrapper>
        <LinksWrapper>
          <Links>
            <Link href="#om-hallsnas">Om Hällsnäs</Link>
            <Link href="#tider">Tider</Link>
            <Link href="#boende">Boende</Link>
            <Link href="#aktiviteter">Aktiviteter</Link>
          </Links>
          <Links>
            <Link href="#mat-och-dryck">Mat & dryck</Link>
            <Link href="#ovrig-info">Övrig info</Link>
            <Link href="#hitta-hit">Hitta hit</Link>
          </Links>
        </LinksWrapper>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: ${theme.colors.green.dark};
  height: fit-content;
  padding: ${theme.spacing.xxl} 0;

  @media ${devices.tablet} {
    padding: ${theme.spacing.xxxl} 0;
  }
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xxl};
  padding: 0 20px;
  
  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
    gap: ${theme.spacing.l};
  }
`;

const FancyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.m};
  max-width: 360px;
`;

const FancyText = styled.h2`
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  font-weight: 400;
  color: ${theme.colors.common.white};
`;

const Signature = styled.h4`
  font-family: 'Dancing Script', cursive;
  font-size: 22px;
  font-weight: 700;
  color: ${theme.colors.gold.regular};
`;

const Links = styled.div`
  display: flex;
  gap: ${theme.spacing.s};
  flex-direction: column;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
`;

const Link = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: ${theme.colors.text.light};
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
