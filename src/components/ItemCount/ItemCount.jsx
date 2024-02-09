import { useState } from "react";
import classes from './ItemCount.module.css'
import { Link } from "react-router-dom";


function ItemCount({ stock, initial = 1, onAdd, onAddToCart }) {

    const [count, setCount] = useState(initial)

    const incrementar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const decrementar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const agregarAlCarrito = () => {
        onAdd(count);

        onAddToCart(count);
    }

    return (
        <div className={classes.container}>
            <div className={classes.containerButon}>
                <button onClick={decrementar}>-</button>
                <h3 className={classes.buttons}>{count}</h3>
                <button onClick={incrementar} className={classes.buttons}>+</button>
            </div>
            <div className={classes.padreComprar}>
                <button className={classes.btnCesta} onClick={agregarAlCarrito}>
                    Agregar al carrito
                </button>
                <Link to={'/cart'} className={classes.btnComprar} onClick={agregarAlCarrito}>Agregar y pagar</Link>
            </div>
        </div>
    )
}

export default ItemCount