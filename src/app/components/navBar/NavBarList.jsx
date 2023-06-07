import Styles from "./_Navbar.module.sass";
import ActiveLink from "../activeList/ActiveLink";
import { secciones } from "../../helpers/secciones";

const NavBarList = ({ toggleNavBarList, navBarList, bg }) => {
  return (
    <div className={Styles.menuSection} ref={bg}>
      <div ref={navBarList} className={Styles.navlinks}>
        <ul>
          {secciones.map((element, i) => (
            <li key={i} style={{ order: i }}>
              <ActiveLink
                activeClassName={Styles.activeLink}
                className={Styles.link}
                href={element.href}
                onClick={toggleNavBarList}
              >
                {element.name}
              </ActiveLink>
            </li>
          ))}
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default NavBarList;
