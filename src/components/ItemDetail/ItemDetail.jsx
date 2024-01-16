import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'

const ItemDetail = ({ id, category, name, img, price, description, stock }) => {
    
    const handleOnAdd= (quantity) => {
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
            <h1 className={classes.titulo}>{name}</h1>
            <img src={img} alt={name} className={classes.img} />
            <p>Categoria: {category}</p>
            <p>{price}</p>
            <p>descripcion: {description}</p>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail