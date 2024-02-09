import { FaCartArrowDown } from "react-icons/fa6";
import classes from './CartWidget.module.css'
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useCart()

    // Verificar si totalQuantity es NaN y manejarlo
    const quantityToShow = isNaN(totalQuantity) ? 0 : totalQuantity;


    return (
        <Link to="/cart" className={classes.enlace}>
            <div className={classes.contenedor}>
                <p style={{ fontSize: '25px' }}>{String(quantityToShow)}</p>
                <FaCartArrowDown style={{ color: 'blue', fontSize: '30px' }} />
            </div>
        </Link>

    )
}

export default CartWidget