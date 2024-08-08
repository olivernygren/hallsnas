import { X } from '@phosphor-icons/react'
import React from 'react'
import theme, { devices } from '../../theme'
import styled from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <ModalBackdrop>
      <ModalRoot>
        <ModalHeader>
          <ModalTitle>
            {title}
          </ModalTitle>
          <div onClick={onClose} style={{cursor: 'pointer'}}>
            <X size={32} color={theme.colors.grey.regular} />
          </div>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalRoot>
    </ModalBackdrop>
  )
};

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalRoot = styled.div`
  background-color: ${theme.colors.common.white};
  border-radius: ${theme.borderRadiuses.l};
  width: 90%;
  max-width: 600px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.m};
  padding: ${theme.spacing.m} ${theme.spacing.m} 0 ${theme.spacing.m};

  @media ${devices.tablet} {
    width: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.m} ${theme.spacing.m} 0 ${theme.spacing.m};
  /* border-bottom: 1px solid ${theme.colors.grey.light}; */
`;

const ModalTitle = styled.h2``;

const ModalContent = styled.div`
  padding: 0 ${theme.spacing.m} ${theme.spacing.m} ${theme.spacing.m};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.m};
`;

export default Modal