import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  layout,
  typography,
  background,
  border
} from "styled-system";

const Button = styled.button`
  cursor: pointer;
  outline: 0;
  text-transform: none;
  touch-action: manipulation;
	white-space: nowrap;
	
	&:disabled {
		box-shadow: none;
		cursor: not-allowed;
		opacity: 0.65;
    pointer-events: none;
	}

	&:hover, &:active, &:focus {
		background-color: #35a454;
    border-color: #31984e;
	}

	${color}
	${space}
	${layout}
	${typography}
	${border}
	${background}
`;

const AppButton = props => {
  return (
    <Button
      color="#fff"
      bg="#3bb75e"
      pr="12px"
      pl="12px"
      height="29px"
      fontWeight="700"
      fontSize="12px"
      textAlign="center"
      display="block"
      verticalAlign="middle"
      backgroundImage="none"
      border="1px solid transparent"
      borderColor="#3bb75e"
      borderRadius="3px"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default AppButton;
