import React from "react";
import styled from "styled-components";
import AppLink from "./UI/AppLink";
import { gap } from "../styles/mixins";
import logo from "../assets/images/icon.png";
import SimpleLink from "../components/UI/SimpleLink";

const FooterElement = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 30px 0;
  background: var(--color-brown);
  box-shadow: var(--shadow-black);
`;
const Content = styled.div``;
const NavBar = styled.nav`
  display: flex;
  flex-flow: column;
  gap: ${gap("0", "10px")}
`;
const Logo = styled(AppLink)`
  margin: 0 0 20px 0;
  display: inline-flex;
  align-items: center;
  gap: ${gap("10px")}
`;
const LogoImage = styled.img`
  width: 50px;
`;
const LogoTitle = styled.h3`
  font-family: 'Playfair Display';
  font-size: 32px;
`;
const Info = styled.div`
  display: flex;
  gap: ${gap("40px")}
`;
const Contacts = styled.ul`
  margin: 0 0 0 auto;
  display: flex;
  flex-flow: column;
  align-items: start;
  gap: ${gap("10px")}
`;
const Contact = styled.li`
  display: flex;
  align-items: center;
  gap: ${gap("10px")} 
  &>a{
    color: var(--color-white);
  }
`;

function Footer () {
  return(
    <FooterElement>
      <Content className="container">
        <Logo to="/"><LogoImage src={logo}/><LogoTitle>Bellagio</LogoTitle></Logo>
        <Info>
          <NavBar>
            <AppLink to="/">Главная</AppLink>
            <AppLink to="/addresses">Адреса</AppLink>
          </NavBar>
          <NavBar>
            <AppLink to="/menu">Меню</AppLink>
            <AppLink to="/basket">Корзина</AppLink>
          </NavBar>
          <Contacts>
            <Contact><SimpleLink href="tel:+7999999999">8 (999) 99-99-99</SimpleLink></Contact>
            <Contact><SimpleLink href="tel:+7999999999">8 (999) 99-99-99</SimpleLink></Contact>
          </Contacts>
        </Info>
      </Content>
    </FooterElement>
  );
}

export default Footer;