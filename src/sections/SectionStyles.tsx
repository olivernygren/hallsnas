import styled from "styled-components";
import theme from "../theme";

export const SectionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.l};
  max-width: 500px;
`;

export const SectionImage = styled.img<{ shadow?: boolean }>`
  height: 400px;
  aspect-ratio: 5/6;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: ${({ shadow }) => shadow ? '0px 4px 8px rgba(76, 76, 76, 0.1)' : 'none'};
`;

export const PlainLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.text.dark};
`;

export const Paragraphs  = styled.div<{spacing: 'normal' | 'small' }>`
  display: flex;
  flex-direction: column;
  gap: ${({ spacing }) => (spacing === 'normal' ? theme.spacing.s : theme.spacing.xxs)};
`;