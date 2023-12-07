import { useState } from "react";

export const useForm = (initialForm = {}, errors, setErrors) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
    setErrors({});
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
