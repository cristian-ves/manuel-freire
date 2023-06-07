import React from "react";

import Styles from "./_Button.module.sass";

const Button = ({ isPrimary = true, children, ...props }) => {
  return (
    <div
      {...props}
      className={
        isPrimary
          ? Styles.container
          : Styles.containerSecondary + " " + (props.className || "")
      }
    >
      {children}
    </div>
  );
};

export default Button;
