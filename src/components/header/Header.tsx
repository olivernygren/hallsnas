import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '../../theme';
import Navigation from './Navigation';

const PageHeader = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setHasScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header hasScrolled={hasScrolled}>
      <Navigation />
    </Header>
  )
}

const Header = styled.header<{ hasScrolled: boolean }>`
  background-color: ${({ hasScrolled }) => hasScrolled ? theme.colors.common.white : 'transparent'};
  box-shadow: ${({ hasScrolled }) => hasScrolled ? '4px 0px 12px rgba(0, 0, 0, 0.05)' : 'none'};
  transition: background-color 0.3s, box-shadow 0.3s;
  width: 100%;
  padding: ${theme.spacing.m} 0;
  /* height: 80px; */

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default PageHeader;