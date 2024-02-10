import React, { useState } from "react";
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import classes from './Checkout.module.css';
import OrderForm from "../OrderForm/OrderForm";
import { db } from "../../services/firebase/firebaseConfig";
import { mostrarNotificacion } from "../../notificaciones/Notificaciones";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true); // Nuevo estado
  const { cart, totalCart, clearCart } = useCart();

  const createOrder = async (userData) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        },
        items: cart,
        totalCart,
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map(prod => prod.id);
      const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));

      const QuerySnapshot = await getDocs(productsCollection);
      const { docs } = QuerySnapshot;

      docs.forEach(doc => {
        const fields = doc.data();
        const stockDb = fields.stock;

        const productsAddedToCart = cart.find(prod => prod.id === doc.id);
        const prodQuantity = productsAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fields });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const orderCollection = collection(db, 'orders');
        const { id } = await addDoc(orderCollection, objOrder);
        setOrderId(id);

        // Limpiar el carrito después de generar la orden
        clearCart();

        // Ocultar el formulario después de generar la orden
        setIsFormVisible(false);
      } else {
        mostrarNotificacion('error, hay productos que están agotados o no tienen esa cantidad');
      }

    } catch (error) {
      mostrarNotificacion('error', 'hubo un error al crear la orden');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      {loading ? (
        <h1>Se está cargando su orden, espere...</h1>
      ) : (
        <div>
          {isFormVisible && ( // Mostrar el formulario solo si isFormVisible es true
            <div>
              <h1>Formulario</h1>
              <OrderForm onCreate={createOrder} />
            </div>
          )}

          {orderId && (
            <div>
              <h1>Compra realizada con exito, <br /> 
              El id de su compra es: {orderId}</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
