import { useState } from "react";
import classes from './ItemCount.module.css'

function ItemCount({stock, initial= 1, onAdd}) {

    const [count, setCount] = useState(initial)

    const incrementar = () => {
        if(count<stock){
            setCount(count+1)
        }
    }
    const decrementar = () => {
        if(count>1){
            setCount(count-1)
        }
    }
    return (
        <div className={classes.container}>
            <div className={classes.containerButon}>
                <button onClick={decrementar}>-</button>
                <h3 className={classes.buttons}>{count}</h3>
                <button onClick={incrementar} className={classes.buttons}>+</button>
            </div>
                <button className={classes.btnComprar}>Comprar</button>
                <button className={classes.btnCesta} onClick={()=> onAdd(count)}>
                    Agregar al carrito
                </button>
        </div>
    )
}

export default ItemCount