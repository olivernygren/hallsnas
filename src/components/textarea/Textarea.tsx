import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

interface TextareaProps {
  id: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  required?: boolean;
}

const Textarea = ({ id, name, placeholder, disabled, fullWidth, label, required }: TextareaProps) => {
  return (
    <Wrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledTextarea
        id={id}
        name={name}
        placeholder={placeholder}
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

const StyledTextarea = styled.textarea<{ fullWidth?: boolean, disabled?: boolean }>`
  background-color: ${({ disabled }) => disabled ? `${theme.colors.grey.light}` : `${theme.colors.common.white}`};
  border: 1px solid #E2E2E2;
  border-radius: 8px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  min-height: 120px;
  padding: ${theme.spacing.xs};
  font-size: 16px;
  font-family: 'Playfair Display', sans-serif;
  resize: vertical;

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

export default Textarea;