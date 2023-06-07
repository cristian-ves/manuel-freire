"use client";

import ActiveLink from "../activeList/ActiveLink";
import Styles from "./_Footer.module.sass";

export const enlacesExtra = [
  {
    name: "Términos y condiciones",
    href: "/terminos-condiciones",
  },
  {
    name: "Aviso legal",
    href: "/aviso-legal",
  },
];

const EnlacesExtra = () => {
  return (
    <>
      <h3 className={Styles.title}>Enlaces extra</h3>
      <ul>
        {enlacesExtra.map((enlace, i) => (
          <li key={i} className={Styles.enlace}>
            <ActiveLink
              href={enlace.href}
              activeClassName={Styles.activeSeccion}
              className={Styles.seccion}
            >
              {enlace.name}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EnlacesExtra;
