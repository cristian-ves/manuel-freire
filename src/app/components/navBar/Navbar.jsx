"use client";

import Image from "next/image";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiClose } from "@mdi/js";

import Styles from "./_Navbar.module.sass";
import NavBarList from "./NavBarList";
import { useToggleMenu } from "@/app/hooks/useToggleMenu";

const NavBar = () => {
  const { toggleNavBarList, navBarList, bg, button } = useToggleMenu();

  return (
    <header className={Styles.header}>
      <nav>
        <div className={Styles.navbar}>
          <div className={Styles.logo}>
            <Image
              src="/assets/logo.svg"
              width={100}
              height={100}
              className={Styles.svg}
              alt="Manuel Freire logo"
            />
          </div>
          <div
            className={Styles.hamburguerButton}
            onClick={toggleNavBarList}
            ref={button}
          >
            <Icon path={mdiMenu} horizontal />
            <Icon path={mdiClose} horizontal className={Styles.close} />
          </div>
        </div>
      </nav>
      <NavBarList
        navBarList={navBarList}
        toggleNavBarList={toggleNavBarList}
        bg={bg}
      />
    </header>
  );
};

export default NavBar;
