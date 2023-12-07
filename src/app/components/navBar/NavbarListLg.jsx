import React from "react";
import Styles from "./_Navbar.module.sass";
import ActiveLink from "../activeList/ActiveLink";
import { secciones } from "../../helpers/secciones";

const NavbarListLg = () => {
  return (
    <div className={Styles.menuSectionLg}>
      <ul>
        {secciones.map((element, i) => (
          <li key={i} style={{ order: i }}>
            <ActiveLink
              activeClassName={Styles.activeLink}
              href={element.href}
              className={Styles.link}
            >
              {element.name}
            </ActiveLink>
          </li>
        ))}
        <hr />
      </ul>
    </div>
  );
};

export default NavbarListLg;
