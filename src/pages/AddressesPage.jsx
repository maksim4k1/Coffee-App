import React from "react";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import addressImage from "../assets/images/address.jpg";
import address2Image from "../assets/images/address2.jpg";
import ClockIcon from "../assets/icons/ClockIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import Button from "../components/UI/Button";
import SimpleLink from "../components/UI/SimpleLink";

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
const List = styled.ul`
  display: flex;
  flex-flow: column;
  gap: ${gap("20px")};
  &>li:nth-child(2n){
    flex-direction: row-reverse;
  }
`;
const Address = styled.li`
  width: 100%;
  display: flex;
  background: var(--color-white);
  box-shadow: var(--shadow-black);
  border-radius: 15px;
  overflow: hidden;
`;
const AddressImage = styled.img`
  width: 45%;
  min-height: 100%;
`;
const AddressContent = styled.div`
  width: 55%;
  padding: 20px 30px;
  display: flex;
  flex-flow: column;
  align-items: start;
`;
const AddressTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 26px;
  font-weight: 600;
`;
const AddressDescription = styled.p`
  height: 60px;
  margin: 0 0 20px 0;
`;
const AddressInfo = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  align-items: start;
  gap: ${gap("40px")}
`;
const AddressContacts = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: start;
  gap: ${gap("5px")}
`;
const AddressContact = styled.li`
  display: flex;
  align-items: center;
  gap: ${gap("10px")}
  font-weight: 600;
`;
const AddressWorkTime = styled.div`
  display: flex;
  align-items: center;
  gap: ${gap("10px")}
  font-weight: 600;
`;


function AddressesPage () {
  return(
    <Main className="container">
      <Title>Кофейни</Title>
      <List>
        <Address>
          <AddressImage src={addressImage} />
          <AddressContent>
            <AddressTitle>ул. Федора Лыткина, дом 14</AddressTitle>
            <AddressDescription>Уютная кофейня</AddressDescription>
            <AddressInfo>
              <AddressContacts>
                <AddressContact><PhoneIcon/><SimpleLink href="tel:+7999999999">8 (999) 99-99-99</SimpleLink></AddressContact>
                <AddressContact><PhoneIcon/><SimpleLink href="tel:+7999999999">8 (999) 99-99-99</SimpleLink></AddressContact>
              </AddressContacts>
              <AddressWorkTime><ClockIcon/>пн-сб 9:00-21:00</AddressWorkTime>
            </AddressInfo>
            <Button style={{boxShadow: "0 0 0"}}>Предзаказ</Button>
          </AddressContent>
        </Address>
        <Address>
          <AddressImage src={address2Image} />
          <AddressContent>
            <AddressTitle>ул. Ленина, дом 172</AddressTitle>
            <AddressDescription>Уютная кофейня</AddressDescription>
            <AddressInfo>
              <AddressContacts>
                <AddressContact><PhoneIcon/><SimpleLink href="tel:+7999999999">8 (999) 99-99-99</SimpleLink></AddressContact>
                <AddressContact><PhoneIcon/><SimpleLink href="tel:+7999999999">8 (999) 99-99-99</SimpleLink></AddressContact>
              </AddressContacts>
              <AddressWorkTime><ClockIcon/>пн-сб 9:00-21:00</AddressWorkTime>
            </AddressInfo>
            <Button style={{boxShadow: "0 0 0"}}>Предзаказ</Button>
          </AddressContent>
        </Address>
      </List>
    </Main>
  );
}

export default AddressesPage;