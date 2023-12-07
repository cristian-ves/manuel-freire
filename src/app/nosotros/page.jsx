import React from "react";
import Galeria from "../galeria/GaleriaComponent";

const Nosotros = () => {
  return (
    <>
      <h1>Sobre Nosotros</h1>

      <p>
        Somos un equipo que cuenta con la experiencia y conocimientos para poder
        realizar proyectos relacionados a la pintura en el mejor tiempo para tu
        comodidad.
      </p>

      <p>
        Con más de 15 años de experiencia y conocimiento en el sector y con una
        lista amplia de clientes satisfechos.
      </p>

      <p>Revisa la galería de nuestros trabajos</p>

      <Galeria imagesToShow={6} />
    </>
  );
};

export default Nosotros;
