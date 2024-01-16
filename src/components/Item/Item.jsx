import classes from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ category, name, img, price, id }) => {
    return (
        <div className={classes.container}>
            <h1 className={classes.titulo}>{name}</h1>
            <img src={img} alt={name} className={classes.img} />
            <p>Categoria: {category}</p>
            <p>{price}</p>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item