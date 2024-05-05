import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../../Hooks/useCheckoutStore";
import { useForm } from "../../Hooks/useForm";
import { useCarritoStore } from "../../Hooks/useCarritoStore";

export const PaymentPage = () => {
  const navigate = useNavigate();

  //Estos datos y funciones se extraen del contexto global gracias a redux
  const { startClearPayment, startSetPayment } = useCheckoutStore();
  const {carrito}=useCarritoStore();
  const {confirmCart}=useCarritoStore();
  

  const {
    paymentMethod,
    cardNumber,
    expiryDate,
    cvv,
    handleOnChange,
    handleReset,
  } = useForm({ paymentMethod: "", cardNumber: "", expiryDate: "", cvv: "" });



//Acciones que se realizan al hacer un reset del formulario 
  const onHandleReset = () => {
    startClearPayment();
    handleReset();
  };


  //accion que se realiza tras el submit
  const handleConfirmPayment = () => {
    //Seguramente deba añadir un helper para procesar el pago
    console.log("Has realizado el pago");
    // Aquí podrías agregar la lógica para procesar el pago
    startSetPayment({
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
    });
    // Después de completar el pago, navega a la siguiente página
    //Esto procesa el pedido e interactua con la base de datos

    try {
      confirmCart(carrito)
      navigate("/checkout/success", { replace: true })


    ///esto es algo provisional,no parece muy moderno
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function (event) {
      window.history.go(1);
    }

    } catch (error) {
      console.log("Ha habido un error durante la confirmacion del pedido")
      navigate("/checkout/error", { replace: true })
    }

    
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Pago</h1>

      <form
        onSubmit={handleConfirmPayment}
        onReset={onHandleReset}
        className="mt-4"
      >
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">
            Método de Pago
          </label>
          <input
            value={paymentMethod}
            onChange={handleOnChange}
            required
            type="text"
            className="form-control"
            id="paymentMethod"
            name="paymentMethod"
            placeholder="Introduce el método de pago"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">
            Número de Tarjeta
          </label>
          <input
            value={cardNumber}
            onChange={handleOnChange}
            required
            type="text"
            className="form-control"
            name="cardNumber"
            id="cardNumber"
            placeholder="Introduce el número de tarjeta"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">
            Fecha de Vencimiento
          </label>
          <input
            value={expiryDate}
            onChange={handleOnChange}
            required
            type="text"
            className="form-control"
            name="expiryDate"
            id="expiryDate"
            placeholder="Introduce la fecha de vencimiento"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">
            CVV
          </label>
          <input
            value={cvv}
            onChange={handleOnChange}
            required
            type="text"
            className="form-control"
            name="cvv"
            id="cvv"
            placeholder="Introduce el CVV"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Confirmar Pago
        </button>
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </form>
    </div>
  );
};
