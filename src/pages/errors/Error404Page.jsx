import React from "react";
import styled from "styled-components";

const ErrorBlock = styled.main`
  margin-top: 50px;
  margin-bottom: 50px;
`;

function Error404Page () {
  return(
    <ErrorBlock className="container">
      Ошибка 404!
    </ErrorBlock>
  );
}

export default Error404Page;