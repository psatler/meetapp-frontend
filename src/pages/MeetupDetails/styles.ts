import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  h2 {
    color: #fff;
  }

  strong {
    color: #fff;
    /* margin-top: 5px; */
  }

  @media only screen and (max-width: 768px) {
    max-width: 700px;
  }

  @media only screen and (max-width: 425px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 375px) {
    max-width: 350px;
  }

  @media only screen and (max-width: 320px) {
    max-width: 310px;
  }
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

  div {
    display: flex;

    a,
    button {
      display: flex;
      align-items: center;

      margin: 5px 5px 0;
      height: 44px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      padding: 0 15px;

      transition: background 0.5s;
    }

    a {
      background: #0000b2;
      /* margin-right: 5px; */

      &:hover {
        background: ${darken(0.08, '#0000ff')};
      }
    }

    button {
      background: #d44059;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 425px) {
    strong {
      font-size: 1rem;
    }

    div {
      a,
      button {
        height: 22px;
        font-size: 12px;
      }
    }
  }
`;
