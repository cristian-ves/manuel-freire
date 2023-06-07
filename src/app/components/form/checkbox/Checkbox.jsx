import React, { useId } from "react";

import Styles from "./Checkbox.module.sass";

const Checkbox = ({ children }) => {
  const id = useId();

  return (
    <label htmlFor={id} className={Styles.label}>
      <div className={Styles.box}>
        <input
          type="checkbox"
          name="checkbox"
          id={id}
          className={Styles.input}
        />
        <span className={Styles.span}></span>
      </div>
      <p className={Styles.text}>{children}</p>
    </label>
  );
};

export default Checkbox;
