import classes from './ItemListContainer.module.css'
import navidadImage from '../../assets/navidad.jpeg';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className={classes.titulo}>{greeting}</h1>
           <img className={classes.imagenNavidad} src={navidadImage} alt="" />
        </div>
        
    )
}

export default ItemListContainer