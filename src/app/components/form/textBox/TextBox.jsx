"use client";

import { useEffect, useId, useRef, useState } from "react";
import Styles from "./TextBox.module.sass";

import { useForm } from "@/app/hooks/useForm";

export const TextBox = ({ labelText, errorMessage = "", ...inputProps }) => {
  const [containerClass, setContainerClass] = useState(Styles.container);
  const { handleInputChange } = useForm("");

  const input = useRef(null);

  const id = useId();

  useEffect(() => {
    console.log(errorMessage);
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
          autoComplete="off"
          className={Styles.input}
          onChange={handleInputChange}
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
