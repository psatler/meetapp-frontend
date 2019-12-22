import React from 'react';

import { Wrapper } from './styles';

interface OwnProps {
  // eslint-disable-next-line
  children: any;
}

export default function AuthLayot({ children }: OwnProps) {
  return <Wrapper>{children}</Wrapper>;
}
