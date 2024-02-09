
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notificaciones = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000} // Duración en milisegundos que la notificación estará visible
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export const mostrarNotificacion = (mensaje, tipo) => {
  switch (tipo) {
    case 'success':
      toast.success(mensaje);
      break;
    case 'error':
      toast.error(mensaje);
      break;
    case 'warning':
      toast.warning(mensaje);
      break;
    default:
      toast.info(mensaje);
  }
};

export default Notificaciones;
