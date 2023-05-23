import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: var(--color-black);
  &:hover{
    color: var(--color-yellow);
    text-decoration: underline;
  }
  transition: color 0.3s;
`;

function SimpleLink (props) {
  return(
    <Link style={props.color ? {color: props.color} : {}} {...props}>
      {props.children}
    </Link>
  );
}

export default SimpleLink;