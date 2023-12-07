import React from "react";
import Form from "../components/form/Form";

import Styles from "./Presupuesto.module.sass";

const Presupuesto = () => {
  return (
    <>
      <h1 className={Styles.title}>¡Envía tu presupuesto!</h1>
      <p>
        Puedes mandar una propuesta y te enviaremos un correo electrónico con el
        presupuesto y si gustas te haremos una llamada telefónica.
      </p>

      <Form />
    </>
  );
};

export default Presupuesto;
