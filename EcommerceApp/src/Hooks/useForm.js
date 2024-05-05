import React, { useState } from "react";

//Custom Hook para el manejo de formularios
//recibe como argumento un objeto con las propiedades del formulario
export const useForm = (formulario={}) => {
  const [form, setForm] = useState(formulario);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e, accionTrasSubmit) => {
    e.preventDefault();
    await accionTrasSubmit();
  };

  const handleReset = () => {
    setForm(formulario); // Restablecer el estado del formulario a su estado inicial
  };

  //Retorna el obejto formulario actualizado,sus propiedades,y  las funciones que puede usar
  return {
    ...form,
    form,
    handleOnChange,
    handleSubmit,
    handleReset,
  }
};
