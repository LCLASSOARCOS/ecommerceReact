import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portada from "./components/Portada/Portada";
import Footer from "./components/Footer/Footer";

function App() {

  const handleOnAdd = ()=> {
    return
    alert('hicisteclick')
  }
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Portada />
                <ItemListContainer greeting={'Listado de productos'} />
              </>
            }
          />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'CATEGORIA:'} />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
