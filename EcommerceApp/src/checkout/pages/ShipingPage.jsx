import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../../Hooks/useCheckoutStore";


export const ShipingPage = () => {
  const navigate = useNavigate();
  const { startSetShiping} = useCheckoutStore();
  const [selectedCarrier, setSelectedCarrier] = useState("");

  const handleSelectCarrier = (carrier) => {
    setSelectedCarrier(carrier);
  };

  const handleSiguiente = () => {
    if (selectedCarrier) {
      startSetShiping({ carrier: selectedCarrier });
      navigate("/checkout/payment");
    } else {
      console.log("Por favor, selecciona un transportista");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Envío</h1>

      <div className="d-flex justify-content-center">
        <div className="btn-group-vertical">
          <button
            className={`btn btn-outline-primary ${
              selectedCarrier === "DHL" ? "active" : ""
            }`}
            onClick={() => handleSelectCarrier("DHL")}
          >
            DHL
          </button>
          <button
            className={`btn btn-outline-primary ${
              selectedCarrier === "UPS" ? "active" : ""
            }`}
            onClick={() => handleSelectCarrier("UPS")}
          >
            UPS
          </button>
          <button
            className={`btn btn-outline-primary ${
              selectedCarrier === "FedEx" ? "active" : ""
            }`}
            onClick={() => handleSelectCarrier("FedEx")}
          >
            FedEx
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button onClick={handleSiguiente} className="btn btn-primary">
          Siguiente
        </button>
      </div>
    </div>
  );
};
