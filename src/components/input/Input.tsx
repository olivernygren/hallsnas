import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
  type: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  required?: boolean;
}

const Input = ({ id, name, placeholder, type, disabled, fullWidth, label, required }: InputProps) => {
  return (
    <Wrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        fullWidth={fullWidth}
        required={required}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<{ fullWidth?: boolean, disabled?: boolean }>`
  background-color: ${({ disabled }) => disabled ? `${theme.colors.grey.light}` : `${theme.colors.common.white}`};
  border: 1px solid #E2E2E2;
  border-radius: 8px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  height: 50px;
  padding: ${theme.spacing.xs};
  font-size: 16px;
  font-family: 'Playfair Display', sans-serif;

  &:focus {
    border-width: 1.5px;
    border-color: ${theme.colors.gold.regular};
    outline: none;
  }
`;

const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: ${theme.spacing.xxs};
  display: inline-block;
`;

export default Input;