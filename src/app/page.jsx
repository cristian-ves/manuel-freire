import Button from "./components/button/Button";
import Slides from "./components/opiniones/slides/Slides";
import TitleImage from "./components/titleImage/TitleImage";
import Contactanos from "./contactanos/page";

export default function Home() {
  return (
    <>
      <TitleImage alt="Pintura" src="header.png">
        Servicio de pintura Manuel Freire, con más de 15 años de experiencia
      </TitleImage>

      <div className="mdParagraphBtn">
        <p>
          Manuel Freire es un pintor en Madrid con 15 años de experiencia en el
          sector, trabajando en fachadas para casas a través de la pintura, en
          interiores y exteriores, barniz, paredes y techos en pladur, alisados
          y relacionados.
        </p>

        <Button to="/presupuesto">Obtener presupuesto</Button>
      </div>

      <article>
        <TitleImage alt="Edificio pintado" src="smallHeader.png" type="small">
          Servicios
        </TitleImage>

        <div className="mdParagraphBtn">
          <p>
            Tenemos experiencia en: pintura en general, interior y exterior,
            barniz, alisados, esmaltes, empapelado, arreglo de escayola,
            reparaciones por gotera y humedades y techos y paredes en pladur.
          </p>

          <Button to="/servicios">Saber más...</Button>
        </div>
      </article>

      <article>
        <Contactanos titleHasImage={true} />
      </article>

      <article>
        <TitleImage alt="Edificio pintado" src="smallHeader.png" type="small">
          Galería
        </TitleImage>

        <div className="mdParagraphBtn">
          <p>
            Tenemos una galería de imágenes donde te mostramos bastantes
            trabajos que hemos hecho.
          </p>

          <Button to="/galeria">Ir a la galería</Button>
        </div>
      </article>

      <article>
        <TitleImage alt="Edificio pintado" src="smallHeader.png" type="small">
          Opiniones
        </TitleImage>

        <Slides />
      </article>
    </>
  );
}
