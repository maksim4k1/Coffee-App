import React from "react";
import styled from "styled-components";

const Item = styled.li`
  width: 48%;
  height: 220px;
  display: flex;
  background: var(--color-white);
  box-shadow: var(--shadow-black);
  border-radius: 15px;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: relative;
  width: 55%;
  padding: 15px;
`;
const Name = styled.h4`
  margin: 0 0 2px 0;
  font-size: 28px;
  font-weight: 600;
`;
const Gramms = styled.div`
  margin: 0 0 10px 0;
  color: var(--color-gray);
  font-size: 14px;
`;
const Description = styled.p`
  margin: 0 0 10px 0;
  font-size: 14px;
`;
const Price = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;
const BasketButton = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 10px;
  border-radius: 12px;
  margin: auto 0 0 auto;
  color: var(--color-yellow);
  font-weight: 600;
  &:hover{
    color: var(--color-black);
    background: var(--color-hover-yellow);
  }
  transition: color 0.3s, background 0.3s;
`;

function ProductItem ({product_id, image, name, description, price}) {
  return(
    <Item>
      <ImageContainer><Image src={image}/></ImageContainer>
      <Info>
        <Name>{name}</Name>
        <Gramms>350/450/550</Gramms>
        <Description>{description}</Description>
        <Price>{price} ₽</Price>
        <BasketButton>В корзину</BasketButton>
      </Info>
    </Item>
  );
}

export default ProductItem;