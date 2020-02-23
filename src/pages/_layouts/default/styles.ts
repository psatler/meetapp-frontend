import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #2a2332, #402944);

  @media only screen and (max-width: 425px) {
    height: calc(1.3 * 100%);
  }
`;
