import Image from "next/image";
import React from "react";

import Button from "../button/Button";

import Styles from "./_Card.module.sass";

const Card = ({ alt, src, content, isList, title, to }) => {
  return (
    <div className={Styles.container}>
      <Image
        className={Styles.image}
        alt={alt}
        src={src}
        width={272}
        height={143}
      />
      <div className={Styles.content}>
        <h3>{title}</h3>
        {isList ? (
          <ul>
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
        <Button isPrimary={false} className={Styles.button} to={to}>
          Ver más
        </Button>
      </div>
    </div>
  );
};

export default Card;
