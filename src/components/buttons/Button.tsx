import React from 'react'
import styled from 'styled-components';
import theme from '../../theme';

interface ButtonProps {
  color?: 'gold' | 'dark';
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: any;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

type Colors = {
  backgroundColor: string;
  hover: string;
  active: string;
  textColor: string;
}

const Button = ({ color, icon, onClick, children, type, disabled }: ButtonProps) => {
  const getButtonContent = () => (
    <>
      {icon && icon}
      {children}
    </>
  );

  const getButtonColors = () => {
    switch (color) {
      case 'gold':
        return {
          backgroundColor: theme.colors.gold.regular,
          hover: theme.colors.gold.dark,
          active: theme.colors.gold.darker,
          textColor: theme.colors.common.white,
        }
      case 'dark':
        return {
          backgroundColor: theme.colors.text.dark,
          hover: theme.colors.text.dark,
          active: theme.colors.text.dark,
          textColor: theme.colors.common.white,
        }
      default:
        return {
          backgroundColor: theme.colors.common.white,
          hover: theme.colors.grey.light,
          active: theme.colors.grey.regular,
          textColor: theme.colors.text.dark,
        }
    }
  }

  return (
    <StyledButton
      colors={getButtonColors()}
    >
      {getButtonContent()}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ colors: Colors }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadiuses.m};
  position: relative;
  overflow: hidden;
  border: none;
  padding: ${theme.spacing.xxs} ${theme.spacing.s};
  white-space: nowrap;

  background-color: ${({ colors }) => colors.backgroundColor};
  color: ${({ colors }) => colors.textColor}; 

  &:hover {
    background-color: ${({ colors }) => colors.hover};
  }

  &:active {
    background-color: ${({ colors }) => colors.active};
  }
`;

export default Button