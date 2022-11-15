import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMarket from "./components/NavBarMarket";
import SliderPrincipal from "./components/SliderPrincipal";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CartContext from "./components/CartContext";
import User from "./components/User";
import Gracias from "./components/Gracias";
import Nosotros from "./components/Nosotros";

const App = () => {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBarMarket />
        <SliderPrincipal />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route
            path="/productos/detalles/:id"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />}></Route>
          <Route path="/gracias" element={<Gracias />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
};

export default App;
