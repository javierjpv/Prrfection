import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { useCheckoutStore } from "../../Hooks/useCheckoutStore";

export const AdressPage = () => {
  //Esto simplemente es un formulario de direccion para realizar el pedido
  const navigate = useNavigate();

  //Tras pulsar en el boton se va a la proxima ruta
  const handleSiguiente = () => {
    navigate("/checkout/shiping");
  };

  const {
    address,
    city,
    postalCode,
    handleOnChange,
    handleSubmit,
    handleReset,
  } = useForm({ address: "", city: "", postalCode: "" });

  //obtenemos los datos del checkout gracias a redux
  //Los datos de checkout siempre estaran disponibles
  const { checkout, startSetAdress, startClearAdress } = useCheckoutStore();

  const accionTrasSubmit = () => {

    //Antes de esto comprueba que contiene datos
    startSetAdress({ address, city, postalCode });
    handleReset();
    console.log("Has hecho submit", checkout);
    //vamos a ala siguiente ruta
    handleSiguiente();
  };

  //acciones que se realizan tras el submit
  const onHandleSubmit = (e) => {
    handleSubmit(e, accionTrasSubmit);
  };

  //Accion que se realiza tras pulsar en el boton reset
  const onHandleReset = () => {
    startClearAdress();
    handleReset();
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Dirección de Envío</h1>

     
      <form onSubmit={onHandleSubmit} onReset={onHandleReset} className="mt-4">
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Dirección
          </label>
          <input
            value={address}
            onChange={handleOnChange}
            required
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Introduce tu dirección"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Ciudad
          </label>
          <input
            value={city}
            onChange={handleOnChange}
            required
            type="text"
            className="form-control"
            name="city"
            id="city"
            placeholder="Introduce tu ciudad"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postalCode" className="form-label">
            Código Postal
          </label>
          <input
            value={postalCode}
            onChange={handleOnChange}
            required
            type="text"
            className="form-control"
            name="postalCode"
            id="postalCode"
            placeholder="Introduce tu código postal"
          />
        </div>
      

        <button type="submit" className="btn btn-primary">
          Siguiente
        </button>
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </form>
    </div>
  );
};
