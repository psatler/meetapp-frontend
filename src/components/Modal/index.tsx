import React from 'react';

import {
  Container,
  ModalContent,
  ActionButtons,
  Description,
  OkButton,
  CancelButton,
} from './styles';

interface OwnProps {
  showModal: boolean;
  confirm: () => void;
  dismiss: () => void;
  title: string;
  // children?: React.ReactNode;
}

// disabling ESLint for the given rule as this only works on TSLint
/* eslint-disable react/prop-types */
const Modal: React.FC<OwnProps> = ({
  children,
  confirm,
  dismiss,
  showModal,
  title,
}) => {
  if (showModal) {
    return (
      <Container onClick={dismiss}>
        <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <h2>{title}</h2>
          <Description>{children}</Description>

          <ActionButtons>
            <OkButton onClick={confirm}>Delete</OkButton>
            <CancelButton onClick={dismiss}>Cancel</CancelButton>

            {/* <button type="button" onClick={confirm}>
              Ok
            </button>
            <button type="button" onClick={dismiss}>
              Cancel
            </button> */}
          </ActionButtons>
        </ModalContent>
      </Container>
    );
  }

  return null;
};

export default Modal;
