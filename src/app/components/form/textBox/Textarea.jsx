"use client";

import { useEffect, useId, useRef, useState } from "react";
import Styles from "./TextBox.module.sass";

export const Textarea = ({ labelText, errorMessage = "", ...inputProps }) => {
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
        <textarea
          className={Styles.input}
          id={id}
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
