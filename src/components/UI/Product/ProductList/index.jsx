import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${gap("20px")}
`;

function ProductList (props) {
  return(
    <List>
      {props.children}
    </List>
  );
}

export default ProductList;