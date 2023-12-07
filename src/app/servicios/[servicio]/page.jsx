import Link from "next/link";

import TitleImage from "@/app/components/titleImage/TitleImage";
import { servicios } from "../../helpers/servicios";
import Button from "@/app/components/button/Button";
import Galeria from "@/app/galeria/GaleriaComponent";

import Styles from "./_Servicio.module.sass";

const Servicio = ({ params }) => {
  const { articleTitle, alt, description } = getServicioData(params.servicio);
  return (
    <>
      <TitleImage
        alt={alt}
        src={`/assets/png/articles/${params.servicio}.png`}
        srcAbsolute
      >
        {articleTitle}
      </TitleImage>

      <p>{description}</p>

      <div className={Styles.buttons}>
        <Button to="/presupuesto">Obtener presupuesto</Button>
        <Button to="/contactanos" isPrimary={false}>
          Contáctanos
        </Button>
      </div>

      <div>
        <p>Revisa la galería de nuestros trabajos</p>

        <Galeria imagesToShow={10} />
      </div>

      <Button to="/servicios" isPrimary={false} className={Styles.backButton}>
        Regresar a ver los servicios que ofrecemos
      </Button>
    </>
  );
};

const getServicioData = (servicio) =>
  servicios.filter((svc) => svc.to.split("servicios/")[1] === servicio)[0];

export default Servicio;
