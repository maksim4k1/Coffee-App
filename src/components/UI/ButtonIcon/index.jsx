import React from "react";
import styled from "styled-components";

const ButtonBlock = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-black);
  background: var(--color-yellow);
  border-radius: 15px;
  box-shadow: var(--shadow-black);
  &:hover{
    background: var(--color-hover-yellow);
  }
  transition: background 0.5s;
`;

function ButtonIcon (props) {
  return(
    <ButtonBlock style={props.color ? {color: props.color} : {}} {...props}>
      {props.children}
    </ButtonBlock>
  );
}

export default ButtonIcon;