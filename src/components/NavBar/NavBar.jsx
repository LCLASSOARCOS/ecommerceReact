import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>

      <nav className={classes.navegation}>

         <ul className={classes.navCategoria}>
            <button className={classes.botonesNav}>Hombre</button>
            <button className={classes.botonesNav}>Mujer</button>
            <button className={classes.botonesNav}>Sale</button>
         </ul>

         <a className={classes.logo} href="index.html">
            <p className={classes.logo}>iLASS</p>
         </a>

        <CartWidget />
      </nav>

   </header>

    )
} 

export default NavBar