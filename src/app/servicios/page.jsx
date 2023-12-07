import React from "react";
import TitleImage from "../components/titleImage/TitleImage";
import Card from "../components/servicios/Card";

import { servicios } from "../helpers/servicios";
import Styles from "./_Servicios.module.sass";

const page = () => {
  return (
    <>
      <TitleImage alt="Rodillo de pintura" src="header.png">
        Servicio de pintura Manuel Freire
      </TitleImage>

      <p>
        Manuel Freire ofrece muchos servicios relacionados al área de pintura
      </p>

      <div className={Styles.cards}>
        {servicios.map(({ alt, src, isList, content, title, to }, i) => (
          <Card
            key={i}
            alt={alt}
            content={content}
            isList={isList}
            to={to}
            src={src}
            title={title}
          />
        ))}
      </div>
    </>
  );
};

export default page;
