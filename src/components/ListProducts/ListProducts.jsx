import classes from './ListProducts.module.css'
import Product from '../Product/Product';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Camiseta', price: 20, imageUrl: 'https://static.dafiti.com.co/p/gap-5871-9900351-1-product.jpg' },
    { id: 2, name: 'Zapatos', price: 50, imageUrl: 'https://static.dafiti.com.co/p/gap-5871-9900351-1-product.jpg' },
    { id: 3, name: 'Pantalones', price: 30, imageUrl: 'https://static.dafiti.com.co/p/gap-5871-9900351-1-product.jpg' },
  ];

  return (
    <div className={classes.contenedor}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;