import ReactDatePicker from 'react-datepicker';

import { Form, Input } from '@rocketseat/unform';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const TextArea = styled(Input).attrs(() => ({
  cols: 100,
  rows: 5,
}))`
  background: #271e2d;
  border: 0;
  border-radius: 4px;
  /* height: 44px; */
  padding: 0 15px;
  color: #fff;
  margin: 0 0 10px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    background: #271e2d;
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  textarea {
    padding-top: 10px;
  }

  span {
    /* display: inline-block; */
    align-self: flex-end;
    background-color: #fce4e4;
    border: 1px solid #fcc2c3;
    border-radius: 7px;
    color: #cc0033;
    font-weight: bold;
    padding: 7px 11px 4px;
    margin-bottom: 3px;

    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 15%;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-bottom-color: #fce4e4;
      border-top: 0;
      margin-left: -8px;
      margin-top: -8px;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }

  a {
    color: #271e2d;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

interface SubmitButtonProps {
  loading: boolean;
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  align-self: flex-end;
  padding: 0 15px;
  margin: 5px 0 0;
  height: 44px;
  /* background: #f94d6a; */
  background: #d44059;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  /* to make the transition smoother */
  transition: background 0.5s;

  ${props =>
    props.loading &&
    css`
      cursor: not-allowed;
    `};

  &:hover {
    background: ${darken(0.08, '#f94d6a')};
  }

  @media only screen and (max-width: 425px) {
    height: 28px;
    font-size: 12px;
  }
`;

export const ReactDatePickerStyled = styled(ReactDatePicker)``;
