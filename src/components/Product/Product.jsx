import classes from './Product.module.css'

const Product = (props) => {
    const { name, price, imageUrl } = props;
  
    return (
      <div className={classes.cart}>
        <h3>{name}</h3>
        <img className={classes.img} src={imageUrl} alt={name} />
        <p>Precio: ${price}</p>
        <button>Comprar</button>
      </div>
    );
  };
  
  export default Product;