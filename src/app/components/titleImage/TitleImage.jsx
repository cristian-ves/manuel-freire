import Image from "next/image";
import React from "react";

import Styles from "./TitleImgae.module.sass";

const TitleImage = ({ alt, src, type = "normal", children }) => {
  return (
    <div className={Styles.container}>
      <Image
        className={Styles.image}
        alt={alt}
        src={src}
        width={360}
        height={type === "normal" ? 172 : 88}
      />
      <h1 className={Styles.title + " " + Styles[type]}>{children}</h1>
    </div>
  );
};

export default TitleImage;
