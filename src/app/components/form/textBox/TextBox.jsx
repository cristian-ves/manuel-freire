"use client";

import { useEffect, useId, useRef, useState } from "react";
import Styles from "./TextBox.module.sass";

export const TextBox = ({ labelText, errorMessage = "", ...inputProps }) => {
  const [containerClass, setContainerClass] = useState(Styles.container);

  const input = useRef(null);

  const id = useId();

  useEffect(() => {
    if (errorMessage != "") {
      setContainerClass(Styles.container + " " + Styles.error);
      input.current.focus();
    } else {
      setContainerClass(Styles.container);
    }
  }, [errorMessage]);

  return (
    <div className={containerClass}>
      <div className={Styles.group}>
        <input
          id={id}
          className={Styles.input}
          type={"text"}
          placeholder=" "
          ref={input}
          {...inputProps}
        />
        <label htmlFor={id} className={Styles.info}>
          {labelText || input.current.name}:
        </label>
      </div>
      <p className={Styles["error-message"]}>{errorMessage}</p>
    </div>
  );
};
