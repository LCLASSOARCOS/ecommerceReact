import { useState, createContext, useContext } from "react"
import { mostrarNotificacion } from "../notificaciones/Notificaciones"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart(prev => [...prev, productToAdd])
    } else {
      mostrarNotificacion('el producto ya esta agregado')
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
    const cartUpdated = cart.filter(prod => prod.id !== id)
    setCart(cartUpdated)
  }

  const totalCart = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateCartItemQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalQuantity = () => {
    let accu = 0

    cart.forEach(prod => {
      accu += prod.quantity
    })
    return accu
  }

  const totalQuantity = getTotalQuantity()

  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  }


  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateCartItemQuantity, totalQuantity, totalCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
