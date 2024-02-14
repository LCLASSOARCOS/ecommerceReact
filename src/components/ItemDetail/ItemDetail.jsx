import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'
import { useCart } from '../../context/CartContext'
import { useState } from 'react'
import { mostrarNotificacion } from '../../notificaciones/Notificaciones'
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, category, name, img, price, description, stock }) => {
    const[quantity, setQuantity] = useState(1)
    const { addItem } = useCart()

    const handleOnAdd = (quantity) => { 
        const objProductToAdd = {
            id,
            name,
            quantity,
            price,
            img,
            stock
        }
        addItem(objProductToAdd)
        setQuantity(quantity) 
    }

    const handleAddToCart = (quantity) => {
        mostrarNotificacion(`Se agrego al carrito: ${quantity} ${name}`);
    };

    return (
        <div className={classes.container}>
            <img src={img} alt={name} className={classes.img} />
            <div className={classes.divisor}>
                <h1 className={classes.titulo}>{name}</h1>
                <p style={{fontSize:25}} className={classes.precio}>{price} mil COP</p>
                <img src={img} alt={name} className={classes.imgMini} />
                <p className={classes.description}>Descripcion: {description}</p>
                <p className={classes.cop}>Talla</p>
                <div className={classes.tallas}>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p>XL</p>
                </div>
                <p>Encuentra tu talla</p>
                <ItemCount stock={stock} onAdd={handleOnAdd} onAddToCart={handleAddToCart}/>
            </div>
        </div>
    )
}

export default ItemDetail