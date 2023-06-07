"use client";

import { useEffect, useId, useRef, useState } from "react";
import Styles from "./TextBox.module.sass";

import { useForm } from "@/app/hooks/useForm";

export const Textarea = ({ labelText, errorMessage = "", ...inputProps }) => {
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
        <textarea
          autoComplete="off"
          className={Styles.input}
          id={id}
          onChange={handleInputChange}
          placeholder=" "
          ref={input}
          rows="9"
          style={{ resize: "vertical" }}
          type={"text"}
          {...inputProps}
        />
        <label
          htmlFor={id}
          className={Styles.info}
          style={{ whiteSpace: "nowrap", fontSize: "0.9rem" }}
        >
          {labelText || input.current.name}:
        </label>
      </div>
      <p className={Styles["error-message"]}>{errorMessage}</p>
    </div>
  );
};
