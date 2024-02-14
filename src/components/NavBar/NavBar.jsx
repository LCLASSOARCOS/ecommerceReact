import classes from "./NavBar.module.css";
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { useState } from "react";

const NavBar = () => {
   const [menuOpen, setMenuOpen] = useState(false)
   
   const toggleMenu = () => {
      setMenuOpen(!menuOpen)
   }

    return (
   <header>

      <nav className={classes.navegation}>

         <div className={classes.menuIcon} onClick={toggleMenu}>
            ☰
         </div>

         <ul className={`${classes.navCategoria} ${menuOpen ? classes.menuOpen : ""}`}>
            <Link to={'/category/hombre'} className={classes.botonesNav}>Hombre</Link>
            <Link to={'/category/mujer'} className={classes.botonesNav}>Mujer</Link>
            <Link to={'/category/sale'} className={classes.botonesNav}>Sale</Link>
         </ul>

         <Link to={'/'} className={classes.logo}>iLASS</Link>
         

        <CartWidget />
        
      </nav>

   </header>

    )
} 

export default NavBar