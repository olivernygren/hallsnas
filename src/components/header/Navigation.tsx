import React, { useState } from 'react'
import styled from 'styled-components'
import theme, { devices } from '../../theme';
import { ArrowSquareOut, List, X } from '@phosphor-icons/react';
import Button from '../buttons/Button';
import MobileMenu from '../mobile-menu/MobileMenu';

interface NavigationProps {
  hasScrolled: boolean;
}

const Navigation = ({ hasScrolled }: NavigationProps) => {
  return (
    <>
      <MobileMenu />
      <Nav>
        <Link href="#tider">Tider</Link>
        <Link href="#boende">Boende</Link>
        <Link href="#om-hallsnas">Om Hällsnäs</Link>
        <Divider />
        <LinkWithIcon>
          <Link href="https://hallsnas.se" target='_blank'>www.hallsnas.se</Link>
          <ArrowSquareOut size={16} weight='fill' />
        </LinkWithIcon>
        <PlainLink href='#fraga'>
          <Button color={hasScrolled ? 'dark' : 'gold'}>
            Ställ en fråga
          </Button>
        </PlainLink>
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  display: none;

  @media ${devices.laptop} { 
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xl};
    width: fit-content;
  }
`;

const Link = styled.a`
  font-size: 17px;
  text-decoration: none;
  color: ${theme.colors.text.dark};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs};
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  background-color: ${theme.colors.grey.regular};
`;

const PlainLink = styled.a`
  text-decoration: none;
`;

export default Navigation