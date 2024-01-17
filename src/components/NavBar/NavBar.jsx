import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
  
    return (
        <header>

      <nav className={classes.navegation}>

         <ul className={classes.navCategoria}>
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