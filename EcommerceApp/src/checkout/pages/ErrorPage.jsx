import React from 'react'
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="text-center">
              <h1>Error</h1>
              <p className='text-danger'>Ha ocurrido un error inesperado.</p>
              <Link className="btn btn-primary" to="/">Volver a la página principal</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  