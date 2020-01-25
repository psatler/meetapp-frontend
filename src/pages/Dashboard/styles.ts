import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
`;

export const UpperSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  strong {
    font-size: 2rem;
    color: white;
    margin-left: 5px;
  }

  button {
    background: #d44059;
    margin: 5px 0 0;
    height: 44px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    padding: 0 15px;

    transition: background 0.5s;

    &:hover {
      background: ${darken(0.08, '#f94d6a')};
    }
  }

  ul {
    display: flex;
    flex-direction: column;
  }
`;

interface MeetupStyledProps {
  past?: boolean;
}

export const Meetup = styled.li<MeetupStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 8px 0;
  /* background: #402944; */

  ${props =>
    props.past
      ? css`
          opacity: 0.5;
        `
      : css`background: linear-gradient(-60deg, #402944, #2a2332)}`}

  border-radius: 30px;

  strong {
    display: inline-block;
    font-size: 1.2rem;
    color: white;
    margin: 15px;
  }

  span {
    font-size: 1rem;
    color: #979797;
    margin: 15px;
  }
`;
