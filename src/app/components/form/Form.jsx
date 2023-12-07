"use client";

import React, { useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";

import axios from "axios";
import qs from "qs";

import { TextBox } from "./textBox/TextBox";
import { Textarea } from "./textBox/Textarea";
import Checkbox from "./checkbox/Checkbox";

import { useForm } from "@/app/hooks/useForm";
import swal from "sweetalert2";

import Styles from "./Form.module.sass";
import Link from "next/link";
import useCheckboxes from "@/app/hooks/useCheckboxes";

const Form = () => {
  const [errors, setErrors] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    descripcion: "",
  });
  const {
    nombre,
    correo,
    telefono,
    descripcion,
    onInputChange,
    formState,
    onResetForm,
  } = useForm(
    {
      nombre: "",
      correo: "",
      telefono: "",
      descripcion: "",
    },
    errors,
    setErrors
  );

  const llamadaCheckboxRef = useRef(null);
  const politicaCheckboxRef = useRef(null);

  const {
    llamadaCheckbox,
    politicaCheckbox,
    checkboxesState,
    onCheckboxChange,
    onResetCheckboxes,
  } = useCheckboxes(
    {
      llamadaCheckbox: false,
      politicaCheckbox: false,
    },
    [llamadaCheckboxRef, politicaCheckboxRef]
  );

  const validateForm = async () => {
    const validationErrors = {};

    if (!nombre) validationErrors.nombre = "El nombre es requerido";

    if (!correo) {
      validationErrors.correo = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      validationErrors.correo = "Formato de correo electronico invalido";
    }

    if (telefono && !/^(?:\+34|0034|34)?[6-9]\d{8}$/.test(telefono))
      validationErrors.telefono = "Numero de telefono invalido";

    if (!descripcion)
      validationErrors.descripcion = "La descripción es requerida";

    if (!politicaCheckbox) {
      swal.fire({
        title: "Politicas de privacidad no aceptadas",
        html: `
        Para enviar la propuesta tienes que leer las politicas de privacidad.
        Aqui puedes ver el ${ReactDOMServer.renderToString(
          <Link href="/aviso-legal">aviso legal</Link>
        )} y aquí puedes ver los ${ReactDOMServer.renderToString(
          <Link href="/terminos-condiciones">Términos y condiciones</Link>
        )} `,
        icon: "info",
        confirmButtonText: "Close",
      });
      return;
    }

    if (llamadaCheckbox && !telefono) {
      swal.fire({
        title: "Número de teléfono no brindado",
        text: "Para que te podamos llamar en horas hábiles necesitamos que ingreses un número de teléfono válido",
        icon: "info",
        confirmButtonText: "Close",
      });
      return;
    }

    if (!llamadaCheckbox && telefono) {
      await swal.fire({
        title: "No has aceptado recibir llamadas en horas habiles",
        text: "Has ingresado un número teléfonico pero no has aceptado recibir llamadas en horas habiles, por lo cual solo te contactaremos por correo electrónico, si cambias de opinion puedes enviar el formulario de nuevo.",
        icon: "info",
        confirmButtonText: "Close",
      });
    }

    setErrors({
      ...errors,
      ...validationErrors,
    });

    return validationErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const validationErrors = await validateForm();

    if (validationErrors) {
      if (Object.keys(validationErrors).length === 0) {
        const data = qs.stringify({
          ...checkboxesState,
          ...formState,
        });

        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://localhost:3000/submit",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: data,
        };

        axios.request(config).catch((error) => {
          console.log(error);
        });

        swal.fire({
          title: "¡Presupuesto enviado exitosamente!",
          text: "Te enviaremos un correo electronico con tus respuestas",
          icon: "success",
        });

        onResetCheckboxes();
        onResetForm();
      } else {
        swal.fire({
          title: "Error al enviar el presupuesto",
          text: "Por favor revisa los campos que tienen errores",
          icon: "error",
        });
      }
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <TextBox
        labelText="Nombre (requerido)"
        errorMessage={errors.nombre}
        name="nombre"
        value={nombre}
        onChange={onInputChange}
      />
      <TextBox
        labelText="Correo electronico (requerido)"
        errorMessage={errors.correo}
        name="correo"
        value={correo}
        onChange={onInputChange}
      ></TextBox>
      <TextBox
        labelText="Teléfono (+34 6XX XXX XXX)"
        errorMessage={errors.telefono}
        name="telefono"
        value={telefono}
        onChange={onInputChange}
      ></TextBox>
      <Textarea
        labelText="Descripcion de la propuesta (requerido)"
        errorMessage={errors.descripcion}
        name="descripcion"
        value={descripcion}
        onChange={onInputChange}
      ></Textarea>
      <p>
        Puedes encontrar el aviso legal y terminos y condiciones en el pie de
        pagina
      </p>

      <div className={Styles.checkboxsContainer}>
        <Checkbox
          name="llamadaCheckbox"
          onChange={onCheckboxChange}
          isChecked={llamadaCheckbox}
          ref={llamadaCheckboxRef}
        >
          Acepto recibir una llamada telefónica en horas hábiles
        </Checkbox>
        <Checkbox
          name="politicaCheckbox"
          onChange={onCheckboxChange}
          isChecked={politicaCheckbox}
          ref={politicaCheckboxRef}
        >
          Acepto la política de privacidad
        </Checkbox>
      </div>
      <input className={Styles.button} type="submit" value="Enviar" />
    </form>
  );
};

export default Form;
