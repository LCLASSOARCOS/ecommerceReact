import {createContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portada from "./components/Portada/Portada";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import CartPage from "./components/CartPage/CartPage";
import Checkout from "./components/Checkout/Checkout";
import Notificaciones from "./notificaciones/Notificaciones";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider> 
          <Notificaciones /> {/* Agrega el componente de notificaciones */}
          <NavBar />
          <Routes>
            <Route path="/" element={
                <>
                  <Portada />
                  <ItemListContainer greeting={'Listado de productos'} />
                </>
              }
            />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={'CATEGORIA:'} />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<h1>ERROR 404</h1>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
