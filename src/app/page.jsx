import Button from "./components/button/Button";
import Form from "./components/form/Form";
import Slides from "./components/opiniones/slides/Slides";
import TitleImage from "./components/titleImage/TitleImage";

import Styles from "./styles/_page.module.sass";

export default function Home() {
  return (
    <>
      <TitleImage alt="Rodillo de pintura" src="/assets/png/header.png">
        Servicio de pintura Manuel Freire, con más de 15 años de experiencia
      </TitleImage>

      <p>
        Manuel Freire es un pintor en Madrid con 15 años de experiencia en el
        sector, trabajando en fachadas para casas a través de la pintura, en
        interiores y exteriores, barniz, paredes y techos en pladur, alisados y
        relacionados.
      </p>

      <Button>Obtener presupuesto</Button>

      <article>
        <TitleImage
          alt="Edificio pintado"
          src="/assets/png/smallHeader.png"
          type="small"
        >
          Servicios
        </TitleImage>

        <p>
          Tenemos experiencia en: pintura en general, interior y exterior,
          barniz, alisados, esmaltes, empapelado, arreglo de escayola,
          reparaciones por gotera y humedades y techos y paredes en pladur.
        </p>

        <Button>Saber más...</Button>
      </article>

      <article>
        <TitleImage
          alt="Edificio pintado"
          src="/assets/png/smallHeader.png"
          type="small"
        >
          Contacto
        </TitleImage>

        <p>
          Puedes contactarnos por whatsapp o llamarnos al número de teléfono:
          +34 91234567.
        </p>

        <div className={Styles.container2Buttons}>
          <Button>Llamar</Button>
          <Button isPrimary={false}>Ir a whatsapp</Button>
        </div>

        <p>
          O también puedes mandar una propuesta y te enviaremos un correo
          electrónico con el presupuesto y si gustas te haremos una llamada
          telefónica.
        </p>

        <Form />
      </article>

      <article>
        <TitleImage
          alt="Edificio pintado"
          src="/assets/png/smallHeader.png"
          type="small"
        >
          Galería
        </TitleImage>

        <p>
          Tenemos una galería de imágenes donde te mostramos bastantes trabajos
          que hemos hecho.
        </p>

        <Button>Ir a la galería</Button>
      </article>

      <article>
        <TitleImage
          alt="Edificio pintado"
          src="/assets/png/smallHeader.png"
          type="small"
        >
          Opiniones
        </TitleImage>

        <Slides />
      </article>
    </>
  );
}
