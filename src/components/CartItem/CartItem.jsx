// CartItem.js
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import classes from "./CartItem.module.css";

const CartItem = ({ item, handleRemoveItemClick, handleQuantityChange }) => {
  return (
    <li>
      <div className={classes.container}>
        <img src={item.img} alt={item.name} className={classes.img} />
        <h1 className={classes.titulo}>{item.name}</h1>
        <div>
          <button onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.stock)}>-</button>
          <span className={classes.parrafo2}>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.stock)}>+</button>
        </div>
        <p className={classes.parrafo2}>SubTotal: {item.price * item.quantity} COP</p>
        <FaRegTrashAlt className={classes.eliminar} onClick={() => handleRemoveItemClick(item.id)} />
      </div>
    </li>
  );
};

export default CartItem;
