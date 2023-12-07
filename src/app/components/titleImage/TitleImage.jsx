import Image from "next/image";
import React from "react";

import Styles from "./TitleImgae.module.sass";

const DEFAULT_PATH = "/assets/png/";

const TitleImage = ({
  alt,
  src,
  type = "normal",
  children,
  srcAbsolute = false,
}) => {
  return (
    <div className={Styles.container}>
      {srcAbsolute ? (
        <Image
          className={Styles.image}
          alt={alt}
          src={src}
          width={360}
          height={type === "normal" ? 172 : 88}
        />
      ) : (
        <picture>
          <source
            media="(width >= 1280px)"
            srcSet={DEFAULT_PATH + "lg/" + src}
          />
          <source
            media="(width >= 440px)"
            srcSet={DEFAULT_PATH + "md/" + src}
          />
          <img src={DEFAULT_PATH + src} className={Styles.image} alt={alt} />
        </picture>
      )}
      <h1 className={Styles.title + " " + Styles[type]}>{children}</h1>
    </div>
  );
};

export default TitleImage;
