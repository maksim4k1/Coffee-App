import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: ${gap("15px")};
`;

function BasketList (props) {
  return(
    <List>
      {props.children}
    </List>
  );
}

export default BasketList;