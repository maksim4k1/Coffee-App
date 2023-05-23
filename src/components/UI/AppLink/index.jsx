import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkElement = styled(NavLink)`
  color: var(--color-white);
  &:hover{
    color: var(--color-yellow);
  }
  transition: 0.5s;
`;

function AppLink (props) {
  return(
    <LinkElement style={props.color ? {color: props.color} : {}} {...props}>
      {props.children}
    </LinkElement>
  );
}

export default AppLink;