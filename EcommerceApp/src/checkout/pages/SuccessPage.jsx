import React from 'react';

//Se mostrara esta pagina tras realizar el pago
export const SuccessPage = () => {
  return (
    <div className="container mt-5">
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">¡Compra exitosa!</h4>
        <p>¡Gracias por tu compra! Tu pedido ha sido procesado con éxito.</p>
        <hr />
        <p className="mb-0">Te enviaremos una confirmación por correo electrónico con los detalles de tu pedido.</p>
      </div>
    </div>
  );
};
