import React from 'react';

import { Wrapper, Content } from './styles';

interface OwnProps {
  // eslint-disable-next-line
  children: any;
}

export default function AuthLayot({ children }: OwnProps) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
