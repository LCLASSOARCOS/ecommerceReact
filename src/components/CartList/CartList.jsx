import React from "react";
import CartItem from "../CartItem/CartItem";

const CartList = ({ cart, handleRemoveItemClick, handleQuantityChange }) => {
  return (
    <ul>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleRemoveItemClick={handleRemoveItemClick}
          handleQuantityChange={handleQuantityChange}
        />
      ))}
    </ul>
  );
};

export default CartList;
