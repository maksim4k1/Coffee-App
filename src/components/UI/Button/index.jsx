import React from "react";
import styled from "styled-components";

const ButtonBlock = styled.button`
  min-width: 100px;
  height: 50px;
  display: flex;
  padding-left: 25px;
  padding-right: 25px;
  justify-content: center;
  align-items: center;
  color: var(--color-black);
  font-weight: 600;
  background: var(--color-yellow);
  border-radius: 15px;
  box-shadow: var(--shadow-black);
  &:hover{
    background: var(--color-hover-yellow);
  }
  transition: background 0.5s;
`;

function Button (props) {
  return(
    <ButtonBlock style={props.color ? {color: props.color} : {}} {...props}>
      {props.children}
    </ButtonBlock>
  );
}

export default Button;