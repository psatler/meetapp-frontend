import React from 'react';

import { Wrapper } from './styles';

interface OwnProps {
  // eslint-disable-next-line
  children: any;
}

export default function DefaultLayout({ children }: OwnProps) {
  return <Wrapper>{children}</Wrapper>;
}
