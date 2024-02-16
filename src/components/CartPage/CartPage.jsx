import React from "react";
import { useCart } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import classes from "./CartPage.module.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeItem, updateCartItemQuantity, totalCart } = useCart();


  const handleRemoveItemClick = (itemId) => {
    removeItem(itemId);
  };

  const handleQuantityChange = (itemId, newQuantity, stock) => {
    const updatedCount = Math.max(1, Math.min(newQuantity, stock));
    updateCartItemQuantity(itemId, updatedCount);
  };

  return (
    <div>
      <h2>Cesta</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <CartList
            cart={cart}
            handleRemoveItemClick={handleRemoveItemClick}
            handleQuantityChange={handleQuantityChange}
          />
          <section className={classes.sectionTotal}>
            <div className={classes.valorTotal}>
               <p>Total: </p> 
              <span className={classes.span}>{totalCart} </span>
            </div>
            <Link className={classes.link} to="/checkout">
              Continuar
            </Link>
          </section>
        </div>
      )}
    </div>
  );
};

export default CartPage;
