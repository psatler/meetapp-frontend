import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;

  /* making the header sticky on smaller screens  */
  /* pure css solution from https://www.npmjs.com/package/react-sticky#css  */
  @media only screen and (max-width: 425px) {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;

    img {
      margin-left: 15px;
    }
  }

  @media only screen and (max-width: 425px) {
    height: 100%;
    margin-top: 5px;

    aside {
      margin-bottom: 5px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #000;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50px;
    margin-right: 15px;
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

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    justify-content: center;

    div {
      text-align: center;
      margin-right: 0;
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50px;
      margin-right: 0;
    }

    button {
      height: 22px;
      font-size: 12px;
    }
  }
`;
