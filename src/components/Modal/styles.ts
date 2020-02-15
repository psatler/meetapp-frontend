import { darken } from 'polished';
import styled from 'styled-components';

// interface ContainerProps {
//   showModal: boolean;
// }

// export const Container = styled.div<ContainerProps>`
export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.7);

  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid green;
`;
export const ModalContent = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  /* background: linear-gradient(-90deg, #ffafbd, #ffc3a0); */
  background: linear-gradient(-90deg, #2a2332, #402944);
  border-radius: 10px;

  h2 {
    background: #ffafbd;
    border-radius: 10px;
    color: #fff;
    padding: 5px;

    margin-top: 25px;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5px;

  strong {
    font-size: 20px;
    color: #ffafbd;
    text-align: center;
    margin-bottom: 5px;

    span {
      font-size: 20px;
      color: ${darken(0.08, '#ffafbd')};
    }
  }

  span {
    font-size: 16px;
    color: #fff;
  }
`;
export const ActionButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 25px;

  button {
    /* align-self: flex-end; */
    padding: 0 15px;
    margin: 5px 0 0;
    height: 44px;
    /* background: #d44059; */
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    /* to make the transition smoother */
    transition: background 0.5s;

    /* &:hover {
      background: ${darken(0.08, '#f94d6a')};
    } */
  }
`;

export const OkButton = styled.button`
  background: #0000b2;
  &:hover {
    background: ${darken(0.08, '#0000ff')};
  }
`;

export const CancelButton = styled.button`
  background: #d44059;

  &:hover {
    background: ${darken(0.08, '#f94d6a')};
  }
`;
