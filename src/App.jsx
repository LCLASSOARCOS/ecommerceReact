
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { FaCartArrowDown } from "react-icons/fa6";


function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer greeting={'FELIZ NAVIDAD!!'}/>
    </>
  )
}

export default App
