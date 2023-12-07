import React from "react";

import Styles from "./_Button.module.sass";
import Link from "next/link";

const Button = ({ isPrimary = true, children, to, tel, href, ...props }) => {
  return (
    <div
      {...props}
      className={
        isPrimary
          ? (props.className || "") + " " + Styles.container
          : (props.className || "") + " " + Styles.containerSecondary
      }
    >
      {to ? (
        <Link href={to} className={Styles.text}>
          {children}
        </Link>
      ) : tel ? (
        <a className={Styles.text} href={"tel:" + tel}>
          {children}
        </a>
      ) : href ? (
        <a className={Styles.text} target="_blank" href={href}>
          {children}
        </a>
      ) : (
        <p className={Styles.text}>{children}</p>
      )}
    </div>
  );
};

export default Button;
