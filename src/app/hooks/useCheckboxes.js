import { useEffect, useState } from "react";

const useCheckboxes = (initialValues = {}, checkboxesRefs) => {
  const [checkboxesState, setCheckboxesState] = useState(initialValues);

  // Update checkbox state based on checkboxesRefs
  useEffect(() => {
    checkboxesRefs.forEach((checkboxRef) => {
      if (checkboxRef.current) {
        const name = checkboxRef.current.name;
        const checked = checkboxesState[name] || false;
        checkboxRef.current.checked = checked;
      }
    });
  }, [checkboxesRefs, checkboxesState]);

  // Handle checkbox change
  const onCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxesState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Reset checkboxes and state
  const onResetCheckboxes = () => {
    const resetState = {}; // Initialize an empty state
    checkboxesRefs.forEach((checkboxRef) => {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
        resetState[checkboxRef.current.name] = false; // Update reset state
      }
    });
    setCheckboxesState(resetState); // Reset state to initial values
  };

  return {
    ...checkboxesState,
    checkboxesState,
    onCheckboxChange,
    onResetCheckboxes,
  };
};

export default useCheckboxes;
