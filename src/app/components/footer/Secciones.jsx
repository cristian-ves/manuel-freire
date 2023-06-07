"use client";

import { secciones } from "@/app/helpers/secciones";
import Styles from "./_Footer.module.sass";
import ActiveLink from "../activeList/ActiveLink";

const Secciones = () => {
  return (
    <>
      <h3 className={Styles.title}>Secciones</h3>
      <ul className={Styles.seccionesList}>
        {secciones.map((seccion, i) => (
          <li key={i}>
            <ActiveLink
              activeClassName={Styles.activeSeccion}
              className={Styles.seccion}
              href={seccion.href}
            >
              {seccion.name}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Secciones;
