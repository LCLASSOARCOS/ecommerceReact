import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'

const ItemDetail = ({ id, category, name, img, price, description, stock }) => {

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            quantity,
            price
        }
        console.log('se agrego correctamente: ', objProduct)
    }
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
                <ItemCount stock={stock} onAdd={handleOnAdd} />
            </div>
        </div>
    )
}

export default ItemDetail