import styled from "styled-components";

import colours from '../shared/colours';

const Button = styled.button`
  cursor: pointer;
  outline: 0;
  text-transform: none;
  white-space: nowrap;
  height: 29px;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  display: block;
  vertical-align: middle;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 3px;
  padding-left: 12px;
  padding-right: 12px;

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.65;
    pointer-events: none;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: #35a454;
    border-color: #31984e;
  }

  &.danger {
    color: #fff;
    background: ${colours.danger};
    border-color: ${colours.danger};
  }

  &.default {
    color: #57584e;
    background: rgba(0,0,0,.05);
    border: solid 1px rgba(0,0,0,.075);
  }

  &.success {
    color: #fff;
    background: ${colours.defaultGreen};
    border-color: ${colours.defaultGreen};
  }
`;

export default Button;
