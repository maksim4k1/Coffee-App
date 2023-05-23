import React from "react";
import styled from "styled-components";
import BasketItem from "../components/UI/Busket/BasketItem";
import BasketList from "../components/UI/Busket/BusketList";
import coffeImage from "../assets/images/coffee.jpg";
import Button from "../components/UI/Button";
import { gap } from "../styles/mixins";

const Main = styled.main`
  width: 100%;
  padding-top: 150px;
  padding-bottom: 100px;
`;
const Title = styled.h1`
  margin: 0 0 20px 10px;
  font-size: 42px;
  font-weight: 600;
`;
const Content = styled.div`
  display: flex;
  gap: ${gap("20px")}
`;
const Form = styled.div`
  min-width: 250px;
  max-width: 250px;
  padding: 15px;
  display: flex;
  flex-flow: column;
  background: var(--color-white);
  box-shadow: var(--shadow-black);
  border-radius: 15px;
`;
const FormTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;
const FormInfo = styled.p`
  font-size: 14px;
`;
const FormInput = styled.input`
  width: 100%;
  margin: 0 0 15px 0;
  padding: 5px 0; 
  border-bottom: 2px solid var(--color-yellow);
`;
const FormButton = styled(Button)`
  margin: 10px 0 0 0;
  height: 40px;
  box-shadow: 0 0 0;
  border-radius: 10px;
`;

function BasketPage () {
  return(
    <Main className="container">
      <Title>Корзина</Title>
      <Content>
        <BasketList>
          <BasketItem image={coffeImage} name="Latte" price="80"/>
          <BasketItem image={coffeImage} name="Latte" price="80"/>
          <BasketItem image={coffeImage} name="Latte" price="80"/>
        </BasketList>
        <Form>
          <FormTitle>Оформление</FormTitle>
          <FormInfo>Введите ваше имя</FormInfo>
          <FormInput placeholder="Иван" />
          <FormInfo>Номер для связи</FormInfo>
          <FormInput placeholder="8 (900) 00-00-00" />
          <FormInfo>Ко скольки приготовить ваш заказ?</FormInfo>
          <FormInput placeholder="чч:мм" />
          <FormButton>Заказать</FormButton>
        </Form>
      </Content>
    </Main>
  );
}

export default BasketPage;