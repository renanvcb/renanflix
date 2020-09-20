import { useState } from 'react';

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    // key is a dynamic value... It can be "name", or "description" or "color"
    setValues({
      ...values,
      [key]: value, // eg.: name: 'Movies'
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}
