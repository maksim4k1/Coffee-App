import MainPage from "../pages/MainPage";
import MenuPage from "../pages/MenuPage";
import AddressesPage from "../pages/AddressesPage";
import BasketPage from "../pages/BasketPage";
import Error404Page from "../pages/errors/Error404Page";

const generalRoutes = [
  {path: "/", element: <MainPage/>, exact: true},
  {path: "/menu", element: <MenuPage/>, exact: true},
  {path: "/addresses", element: <AddressesPage/>, exact: true},
  {path: "/basket", element: <BasketPage/>, exact: true},
  {path: "/error/404", element: <Error404Page/>, exact: true},
];

export default generalRoutes;