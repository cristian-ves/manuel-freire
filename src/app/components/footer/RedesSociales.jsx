import Icon from "@mdi/react";
import Styles from "./_Footer.module.sass";
import { mdiFacebook, mdiInstagram, mdiWhatsapp } from "@mdi/js";

const icons = [
  { path: mdiWhatsapp, href: "https://wa.me/34627044206" },
  { path: mdiInstagram, href: "/" }, //TODO: add instagram link
  { path: mdiFacebook, href: "/" }, //TODO: add facebook link
];

const RedesSociales = () => {
  return (
    <>
      <h3 className={Styles.title}>Redes Sociales</h3>
      <ul className={Styles.logoList}>
        {icons.map((icon, i) => (
          <li key={i}>
            <a href={icon.href} target="_blank">
              <Icon path={icon.path} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RedesSociales;
