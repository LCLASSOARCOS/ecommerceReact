import { FaCartArrowDown } from "react-icons/fa6";
import classes from './CartWidget.module.css'
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useCart()



    // Verificar si totalQuantity es NaN y manejarlo
    const quantityToShow = isNaN(totalQuantity) ? 0 : String(totalQuantity);

    return (
        <Link to="/cart">
            <div className={classes.contenedor}>
                <p className={classes.numerito}>({quantityToShow})</p>
                <FaCartArrowDown className={classes.carrito} />
            </div>
        </Link>

    )
}

export default CartWidget