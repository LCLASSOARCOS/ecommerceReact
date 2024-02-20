import classes from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ category, name, img, price, id }) => {
    return (
        <div className={classes.container}>
            <Link to={`/detail/${id}`}><img src={img} alt={name} className={classes.img} /></Link>
            
            <h1 className={classes.titulo}>{name}</h1>
            <p className={classes.parrafo2}>{price} COP</p>
            <Link to={`/detail/${id}`} className={classes.botonDetalle}>Ver detalle</Link>
        </div>
    )
}

export default Item