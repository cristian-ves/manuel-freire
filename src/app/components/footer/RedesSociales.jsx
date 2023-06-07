import Icon from "@mdi/react";
import Styles from "./_Footer.module.sass";
import { mdiFacebook, mdiInstagram, mdiWhatsapp } from "@mdi/js";

const icons = [
  { path: mdiWhatsapp, href: "" },
  { path: mdiInstagram, href: "" },
  { path: mdiFacebook, href: "" },
];

const RedesSociales = () => {
  return (
    <>
      <h3 className={Styles.title}>Redes Sociales</h3>
      <ul className={Styles.logoList}>
        {icons.map((icon, i) => (
          <li key={i}>
            <a href={icon.href}>
              <Icon path={icon.path} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RedesSociales;
