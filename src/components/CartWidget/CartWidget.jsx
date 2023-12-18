import { FaCartArrowDown } from "react-icons/fa6";
import classes from './CartWidget.module.css'

const CartWidget = () =>{
    return(
        <div className={classes.contenedor}>
            <p style={{fontSize: '25px'}}>0 </p>
            <FaCartArrowDown style={{color: 'blue', fontSize: '30px'}}/>
        </div>
    )
}

export default CartWidget