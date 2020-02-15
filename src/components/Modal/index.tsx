import React from 'react';

import {
  Container,
  ModalContent,
  ActionButtons,
  Description,
  OkButton,
  CancelButton,
} from './styles';

type OwnProps = {
  showModal: boolean;
  confirm: () => void;
  dismiss: () => void;
  title: string;
  children?: React.ReactNode;
};

export default function Modal({
  children,
  title,
  showModal,
  dismiss,
  confirm,
}: OwnProps) {
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
}
