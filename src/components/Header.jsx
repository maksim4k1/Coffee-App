import React from "react";
import styled from "styled-components";
import AppLink from "./UI/AppLink";
import { gap } from "../styles/mixins"
import ButtonIcon from "./UI/ButtonIcon";
import logo from "../assets/images/icon.png";
import BasketIcon from "../assets/icons/BasketIcon";

const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 0;
  background: var(--color-brown);
  z-index: 100;
  box-shadow: var(--shadow-black);
`;
const Container = styled.div`
  display: flex;
  gap: ${gap("40px")}
  align-items: center;
`;
const NavBar = styled.nav`
  margin: 0 auto 0 0;
  display: flex;
  gap: ${gap("40px")};
`;
const Logo = styled.img`
  width: 50px;
`;

function Header () {
  return(
    <HeaderElement>
      <Container  className="container">
        <AppLink to="/  "><Logo src={logo}/></AppLink>
        <NavBar>
          <AppLink to="/">Главная</AppLink>
          <AppLink to="/menu">Меню</AppLink>
          <AppLink to="/addresses">Кофейни</AppLink>
        </NavBar>
        <AppLink to="/basket">
          <ButtonIcon style={{boxShadow: "0 0 0"}}>
            <BasketIcon/>
          </ButtonIcon>
        </AppLink>
      </Container>
    </HeaderElement>
  );
}

export default Header;