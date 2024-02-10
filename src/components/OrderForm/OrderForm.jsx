import React, { useState } from "react";
import styles from "./OrderForm.module.css"; // Asegúrate de tener un archivo CSS para estilos

const OrderForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    // Puedes reiniciar el formulario si es necesario
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
   
      <form className={styles.orderForm} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        Nombre:
        <input
          className={styles.formInput}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label className={styles.formLabel}>
        Email:
        <input
          className={styles.formInput}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label className={styles.formLabel}>
        Teléfono:
        <input
          className={styles.formInput}
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      <button className={styles.formButton} type="submit">
        Generar Compra
      </button>
    </form>
  );
};

export default OrderForm;
