import React from "react";

import Styles from "./_Card.module.sass";

const Card = ({ isActive, author, opinion }) => {
  return (
    <div className={Styles.container + " " + (isActive ? Styles.isActive : "")}>
      <p className={Styles.text}>{opinion}</p>

      <q className={Styles.quote}>{author}</q>
    </div>
  );
};

export default Card;
