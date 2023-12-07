import React, { forwardRef, useId } from "react";
import Styles from "./Checkbox.module.sass";

const Checkbox = forwardRef(({ isChecked, children, ...props }, ref) => {
  const id = useId();

  return (
    <label htmlFor={id} className={Styles.label}>
      <div className={Styles.box}>
        <input
          type="checkbox"
          id={id}
          className={Styles.input}
          ref={ref}
          {...props}
        />
        <span
          className={Styles.span + " " + (isChecked ? Styles.checked : "")}
        ></span>
      </div>
      <p className={Styles.text}>{children}</p>
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
