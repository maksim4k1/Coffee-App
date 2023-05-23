import React from "react";
import styled from "styled-components";
import AppLink from "../components/UI/AppLink";
import startPageBg from "../assets/images/start-page-bg.png";
import Button from "../components/UI/Button";
import { gap } from "../styles/mixins";

const Main = styled.main`
  
`;
const Content = styled.div`
  width: 100%;
  height: 100vh;
  padding: 13% 0 0 0;
  background-image: url(${startPageBg});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 8px var(--color-shadow);
`;
const ContentTitle = styled.h1`
  margin: 0 0 10px 0;
  color: var(--color-white);
  font-size: 84px;
  font-family: 'Playfair Display';
`;
const ContentSubtitle = styled.h1`
  margin: 0 0 40px 0;
  color: var(--color-white);
  font-size: 36px;
  font-family: 'Playfair Display';
`;
const MainButton = styled(Button)`
  width: 220px;
  height: 60px;
  font-size: 22px;
  border-radius: 20px;
`;
const About = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-flow: column;
  gap: ${gap("15px")};
  font-size: 18px;
`;

function MainPage () {
  return(
    <Main style={{backgroundImage: startPageBg}}>
      <Content>
        <div className="container">
          <ContentTitle>Bellagio</ContentTitle>
          <ContentSubtitle>Добро пожаловать в мир<br/>незабываемого кофейного вкуса<br/>и чарующих ритуалов удовольствия.</ContentSubtitle>
          <AppLink to="/menu"><MainButton>Меню</MainButton></AppLink>
        </div>
      </Content>
      <About className="container">
        <p>Добро пожаловать в кофейню <b>Bellagio</b>!</p>
        <p><b>Bellagio</b> - это уютная и стильная кофейня, где вы можете насладиться качественным кофе и изысканными десертами. Мы стремимся создать неповторимую атмосферу, в которой вы сможете расслабиться и насладиться моментом.</p>
        <p>Наша команда экспертов-бариста с большим вниманием относится к каждой чашке кофе, чтобы предложить вам идеальное сочетание аромата и вкуса. Мы гордимся своей уникальной смесью кофе, которая приносит истинное удовольствие и бодрит вас в любое время дня.</p>
        <p>Помимо кофе, мы также предлагаем широкий выбор чая и других безалкогольных напитков. Вы сможете выбрать из нашей коллекции травяных чаев и свежих фруктовых соков, чтобы насладиться освежающим и натуральным вкусом.</p>
        <p>Наши десерты - это настоящее искусство, созданное нашими талантливыми повара. Вы сможете выбрать из разнообразия тортов, пирожных, печенья и других сладостей, которые станут идеальным завершением вашего визита в нашу кофейню.</p>
        <p>Кофейня <b>Bellagio</b> - это место, где вы сможете расслабиться, поболтать с друзьями или просто насладиться тихим уголком для чтения. Наш интерьер сочетает стиль и комфорт, создавая атмосферу, в которой вы сможете наслаждаться своими любимыми напитками и десертами.</p>
        <p>Мы ждем вас в кофейне <b>Bellagio</b>, чтобы подарить вам приятные моменты и незабываемый вкус кофе</p>
      </About>
    </Main>
  );
}

export default MainPage;