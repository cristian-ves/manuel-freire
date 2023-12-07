import React from "react";
import TitleImage from "../components/titleImage/TitleImage";
import Button from "../components/button/Button";
import Form from "../components/form/Form";

import Styles from "./_Contactanos.module.sass";

const Contactanos = ({ titleHasImage = false }) => {
  return (
    <>
      {titleHasImage ? (
        <TitleImage alt="Edificio pintado" src="smallHeader.png" type="small">
          Contacto
        </TitleImage>
      ) : (
        <h1>Contacto</h1>
      )}

      <p>
        Puedes contactarnos por whatsapp o llamarnos al número de teléfono: +34
        91 851 82 03 - 627 044 206.
      </p>

      <div className={Styles.container2Buttons}>
        <Button tel="34918518203">Llamar</Button>
        <Button
          isPrimary={false}
          href="https://api.whatsapp.com/send?phone=34918518203"
        >
          Ir a whatsapp
        </Button>
      </div>

      <p>
        O también puedes mandar una propuesta y te enviaremos un correo
        electrónico con el presupuesto y si gustas te haremos una llamada
        telefónica.
      </p>

      <Form />
    </>
  );
};

export default Contactanos;
