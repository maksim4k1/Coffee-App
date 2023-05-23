import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import Button from "../components/UI/Button";
import ButtonIcon from "../components/UI/ButtonIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import ProductList from "../components/UI/Product/ProductList";
import ProductItem from "../components/UI/Product/ProductItem";
import { connect } from "react-redux";

const Main = styled.main`
  width: 100%;
  padding-top: 150px;
  padding-bottom: 100px;
`;
const NavBar = styled.nav`
  width: 100%;
  display: flex;
  gap: ${gap("15px")};
`;
const NavCategoryButton = styled(Button)`
  height: 50px;
  padding-right: 20px;
  padding-left: 20px;
  box-shadow: var(--shadow-black);
`;
const Search = styled.div`
  margin: 0 0 0 auto; 
  display: flex;
  gap: ${gap("5px")};
`;
const NavInput = styled.input`
  height: 50px;
  width: 250px;
  padding: 0 20px;
  background: var(--color-white);
  border-radius: 15px;
  box-shadow: var(--shadow-black);
`;
const Content = styled.div`
  margin-top: 30px  ;
`;

function MenuPage({products}){
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  function filterSubstr(products, substr){
    let filteredArr = []
    for(let i = 0; i < products.length; i++){
      let el = products[i];
      let name = el.name.toLowerCase();
      let description = el.description.toLowerCase();
      if(description.includes(substr) || name.includes(substr)){
        filteredArr.push(el);
      }
    }
    return filteredArr
  }

  function filterType(products, type){
    let filteredArr = []
    for(let i = 0; i < products.length; i++){
      let el = products[i];
      let elType = el.type;
      if(type === elType || type === "all"){
        filteredArr.push(el);
      }
    }
    return filteredArr
  }

  useEffect(() => {
    setFilteredProducts(filterSubstr(products, searchValue));
  }, [searchValue, products]);

  useEffect(() => {
    setFilteredProducts(filterType(products, typeValue));
  }, [typeValue, products]);

  function onChangeHandler(event){
    setSearchValue(event.target.value.toLowerCase());
  }

  function onClickHandler(type){
    setTypeValue(type);
  }

  return(
    <Main className="container">
      <NavBar>
        <NavCategoryButton onClick={() => onClickHandler("all")}>Все</NavCategoryButton>
        <NavCategoryButton onClick={() => onClickHandler("coffee")}>Кофе</NavCategoryButton>
        <NavCategoryButton onClick={() => onClickHandler("desert")}>Десерты</NavCategoryButton>
        <NavCategoryButton onClick={() => onClickHandler("tea")}>Чай</NavCategoryButton>
        <Search>
          <NavInput placeholder="Поиск..." onChange={onChangeHandler} value={searchValue}/>
          <ButtonIcon><SearchIcon/></ButtonIcon>
        </Search>
      </NavBar>
      <Content>
        <ProductList>
          {
            filteredProducts.length ?
            filteredProducts.map(product => {
              return <ProductItem key={product.id} image={product.image} name={product.name} description={product.description} price={product.price}/>
            }) : searchValue || typeValue ?
            "Ничего не найдено": products ?
            products.map(product => {
              return <ProductItem key={product.id} image={product.image} name={product.name} description={product.description} price={product.price}/>
            }) : null
          }
        </ProductList>
      </Content>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(MenuPage);