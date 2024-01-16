
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portada from "./components/Portada/Portada"

function App() {

  return (
    <>
    
    <BrowserRouter>
      <NavBar />
      <Portada />
      <Routes>
        <Route path="/" element ={<ItemListContainer greeting={'Listado de productos'}/>} />
        
        <Route path="/category/:categoryId" element ={<ItemListContainer greeting={'CATEGORIA:'}/>} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
