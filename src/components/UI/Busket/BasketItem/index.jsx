import React from "react";
import styled from "styled-components";
import DeleteIcon from "../../../../assets/icons/DeleteIcon";
import MinusIcon from "../../../../assets/icons/MinusIcon";
import PlusIcon from "../../../../assets/icons/PlusIcon";
import { gap } from "../../../../styles/mixins";
import ButtonIcon from "../../ButtonIcon";
import ButtnIcon from "../../ButtonIcon";

const Item = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  background: var(--color-white);
  box-shadow: var(--shadow-black);
  border-radius: 15px;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  min-width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
`;
const Name = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;
const Price = styled.div`
  min-width: 120px;
  text-align: center;
  font-size: 24px;
`;
const Count = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  gap: ${gap("15px")}
`;
const CountButton = styled(ButtnIcon)`
  width: 30px;
  height: 30px;
  box-shadow: 0 0 0;
  border-radius: 10px;
`;
const DeleteButton = styled(ButtonIcon)`
  min-width: 50px;
  height: 100%;
  box-shadow: 0 0 0;
  border-radius: 0;
`;

function BasketItem ({image, name, price}) {
  return(
    <Item>
      <ImageContainer><Image src={image} /></ImageContainer>
      <Name>{name}</Name>
      <Count>
        <CountButton><MinusIcon/></CountButton>
        1
        <CountButton><PlusIcon/></CountButton>
      </Count>
      <Price>{price} ₽</Price>
      <DeleteButton><DeleteIcon/></DeleteButton>
    </Item>
  );
}

export default BasketItem;