import latte from "../../assets/images/latte.jpg";
import capuchino from "../../assets/images/capuchino.jpg";
import expresso from "../../assets/images/expresso.jpg";
import raph from "../../assets/images/raph.jpg";
import flat_white from "../../assets/images/flat_white.jpg";
import capcakes from "../../assets/images/capcakes.jpeg";
import tort_cocos from "../../assets/images/tort_cocos.jpg";
import tort_napoleon from "../../assets/images/tort-napoleon.jpg";
import black_tea from "../../assets/images/black_tea.jpg";
import green_tea from "../../assets/images/green_tea.jpg";

const initialState = [
  {id: 0, name: 'Латте', price: 80, type: "coffee", image: `${latte}`, description: "Классический эспрессо, молоко и небольшое количество молочной пены"},
  {id: 1, name: 'Экспрессо', price: 90, type: "coffee", image: `${capuchino}`, description: "Очень бодрящий кофе"},
  {id: 2, name: 'Капучино', price: 70, type: "coffee", image: `${expresso}`, description: "На основе эспрессо и молока, с плотной молочной пеной"},
  {id: 8, name: 'Раф', price: 70, type: "coffee", image: `${raph}`, description: "Кофейный напиток на основе эспрессо, сливок и ванили"},
  {id: 9, name: 'Флэт Уайт', price: 80, type: "coffee", image: `${flat_white}`, description: "Двойной ристретто с подогретым молоком"},
  {id: 3, name: 'Капкейки', price: 120, type: "desert", image: `${capcakes}`, description: "Маленькие бисквитные пирожные"},
  {id: 4, name: 'Торт Кокосовый', price: 140, type: "desert", image: `${tort_cocos}`, description: "Торт с кокосовой стружкой"},
  {id: 5, name: 'Торт Наполеон', price: 110, type: "desert", image: `${tort_napoleon}`, description: "Слоёный торт Наполеон"},
  {id: 6, name: 'Чай черный', price: 50, type: "tea", image: `${black_tea}`, description: "Индийский черный чай"},
  {id: 7, name: 'Чай зеленый', price: 50, type: "tea", image: `${green_tea}`, description: "Индийский зеленый чай"},
]

const productsReducer = (state=initialState, {type}) => {
  switch(type){
    default: {
      return state;
    }
  }
}

export default productsReducer;