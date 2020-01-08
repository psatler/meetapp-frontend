import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
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
`;
