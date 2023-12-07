import React from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

import Styles from "./_Galeria.module.sass";

const NUMBER_OF_IMAGES_TOTAL = 25 - 1;

const GaleriaComponent = ({ imagesToShow = NUMBER_OF_IMAGES_TOTAL }) => {
  let randomNumbers = [];

  for (let i = 0; i < NUMBER_OF_IMAGES_TOTAL + 1; i++) {
    let randomNumber = Math.round(Math.random() * NUMBER_OF_IMAGES_TOTAL) + 1;
    while (randomNumbers.includes(randomNumber)) {
      randomNumber = Math.round(Math.random() * NUMBER_OF_IMAGES_TOTAL) + 1;
    }
    randomNumbers.push(randomNumber);
  }

  randomNumbers = randomNumbers.slice(0, imagesToShow);
  return (
    <div className={Styles.container}>
      <div className={Styles.grid}>
        {randomNumbers.map((number, i) => (
          <div className={Styles.gridItem} key={i}>
            <img
              src={`/assets/png/galeria/${number}.jpg`}
              alt={`imagen ${number}`}
            />
          </div>
        ))}
      </div>
      {imagesToShow < NUMBER_OF_IMAGES_TOTAL && (
        <Link className={Styles.verMas} href="/galeria">
          <p>Ver más imágenes...</p>
          <Icon path={mdiChevronDown} />
        </Link>
      )}
    </div>
  );
};

export default GaleriaComponent;
