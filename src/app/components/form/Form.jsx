"use client";

import React from "react";

import { TextBox } from "./textBox/TextBox";
import { Textarea } from "./textBox/Textarea";
import Checkbox from "./checkbox/Checkbox";
import Button from "../button/Button";

const Form = () => {
  return (
    <form>
      <TextBox labelText="Nombre (requerido)" errorMessage=""></TextBox>
      <TextBox
        labelText="Correo electronico (requerido)"
        errorMessage=""
      ></TextBox>
      <TextBox labelText="Teléfono (requerido)" errorMessage=""></TextBox>
      <Textarea
        labelText="Descripcion de la propuesta (requerido)"
        errorMessage=""
      ></Textarea>
      <Checkbox>
        Acepto recibir una llamada telefónica en horas hábiles
      </Checkbox>
      <Checkbox>Acepto la política de privacidad</Checkbox>
      <Button>Enviar</Button>
    </form>
  );
};

export default Form;
