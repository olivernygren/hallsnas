import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components';
import theme, { devices } from '../../theme';
import { X, List, ArrowCircleRight, ArrowSquareOut } from '@phosphor-icons/react';

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <RootContainer>
      <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={32} color={theme.colors.text.dark} /> : <List size={32} color={theme.colors.text.dark} />}
      </MobileMenuButton> 
      <MenuContainer isOpen={isMobileMenuOpen}>
        <MenuContent>
          <PageButtonsContainer>
            <PageButton onClick={() => setIsMobileMenuOpen(false)}>
              <StyledLink href="#om-hallsnas">Om Hallsnäs</StyledLink>
              <ArrowCircleRight size={24} color={theme.colors.gold.light} weight="fill" />
            </PageButton>
            <Divider />
            <PageButton onClick={() => setIsMobileMenuOpen(false)}>
              <StyledLink href="#tider">Tider</StyledLink>
              <ArrowCircleRight size={24} color={theme.colors.gold.light} weight="fill" />
            </PageButton>
            <Divider />
            <PageButton onClick={() => setIsMobileMenuOpen(false)}>
              <StyledLink href="#boende">Boende</StyledLink>
              <ArrowCircleRight size={24} color={theme.colors.gold.light} weight="fill" />
            </PageButton>
            <Divider />
            <PageButton onClick={() => setIsMobileMenuOpen(false)}>
              <StyledLink href="#aktiviteter">Aktiviteter</StyledLink>
              <ArrowCircleRight size={24} color={theme.colors.gold.light} weight="fill" />
            </PageButton>
            <Divider />
            <PageButton onClick={() => setIsMobileMenuOpen(false)}>
              <StyledLink href="#mat">Mat & Dryck</StyledLink>
              <ArrowCircleRight size={24} color={theme.colors.gold.light} weight="fill" />
            </PageButton>
            <Divider />
            <PageButton onClick={() => setIsMobileMenuOpen(false)}>
              <StyledLink href="#ovrig-info">Övrig Info</StyledLink>
              <ArrowCircleRight size={24} color={theme.colors.gold.light} weight="fill" />
            </PageButton>
            <Divider />
            <PageButton onClick={() => setIsMobileMenuOpen(false)}>
              <StyledLink href="#hitta-hit">Hitta hit</StyledLink>
              <ArrowCircleRight size={24} color={theme.colors.gold.light} weight="fill" />
            </PageButton>
            <Divider />
            <PageButton onClick={() => setIsMobileMenuOpen(false)}>
              <StyledLink gold href="#fraga">Ställ en fråga</StyledLink>
              <ArrowCircleRight size={24} color={theme.colors.gold.light} weight="fill" />
            </PageButton>
          </PageButtonsContainer>
          <BottomLinkContainer onClick={() => setIsMobileMenuOpen(false)}>
            <StyledLinkSmall href="https://www.hallsnas.se" target="_blank">Besök hallsnas.se</StyledLinkSmall>
            <ArrowSquareOut size={24} color={theme.colors.text.dark} />
          </BottomLinkContainer>
        </MenuContent>
      </MenuContainer>
    </RootContainer>
  )
}

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const RootContainer = styled.div`
  position: relative;
  margin: 0;
  height: 72px;
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => isOpen ? css`animation: ${slideIn} 0.3s forwards;` : css`animation: ${slideOut} 0s forwards;`}
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.common.white};
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 50;

  @media ${devices.laptop} {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  @media ${devices.laptop} {
    display: none;
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.l} 20px;
  margin-top: ${theme.spacing.xxl};
  box-sizing: border-box;
  flex: 1;
`;

const PageButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  box-sizing: border-box;
  padding-bottom: ${theme.spacing.l};
`;

const PageButton = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s};
  justify-content: space-between;
  box-sizing: border-box;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.grey.light};
  box-sizing: border-box;
`;

const StyledLink = styled.a<{ gold?: boolean }>`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: ${({ gold }) => (gold ? theme.colors.gold.regular : theme.colors.text.dark)};
`;  

const BottomLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs};
  padding-top: ${theme.spacing.m};
  border-top: 1px solid ${theme.colors.grey.regular};
`;

const StyledLinkSmall = styled.a`
  text-decoration: none;
  color: ${theme.colors.text.dark};
  font-size: 18px;
  font-weight: 500;
`;

export default MobileMenu;