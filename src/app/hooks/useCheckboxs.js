import { useState } from "react";

export const useCheckboxs = (initialValues = {}) => {
  const [checkboxsState, setCheckboxsState] = useState(initialValues);

  const onCheckboxChange = ({ target }) => {
    const { name, checked } = target;
    setCheckboxsState({
      ...checkboxsState,
      [name]: checked,
    });
  };

  const onResetCheckboxs = () => {
    setCheckboxsState(initialValues);
  };

  return {
    ...checkboxsState,
    checkboxsState,
    onCheckboxChange,
    onResetCheckboxs,
  };
};
