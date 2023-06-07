import Image from "next/image";

import Button from "../button/Button";
import RedesSociales from "./RedesSociales";
import Secciones from "./Secciones";

import Styles from "./_Footer.module.sass";
import EnlacesExtra from "./EnlacesExtra";

const Footer = () => {
  return (
    <footer className={Styles.container}>
      <h3 className={Styles.title}>
        ¡Envía tu presupuesto! Cualquier detalle nos ayudará
      </h3>
      <Button isPrimary={false} className={Styles.button}>
        Obtener presupuesto
      </Button>
      <RedesSociales />
      <a href="mailto:manuelfm_1965@hotmail.com">
        <Image
          alt="correo electronico"
          src="/assets/correo.svg"
          className={Styles.correo}
          width={200}
          height={28}
        />
      </a>
      <Secciones />
      <EnlacesExtra />
    </footer>
  );
};

export default Footer;
