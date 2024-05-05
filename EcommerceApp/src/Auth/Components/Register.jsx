import React, { useEffect, useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { useAuthStore } from "../../Hooks/useAuthStore";



export const Register = () => {
  //Creo un useState para saber si el usuario ha pulsado submit en este componente

  const [activo, setactivo] = useState(false)

  //Uso mi customHook para los formularios
  const { email, password, handleSubmit, handleOnChange } = useForm({
    email: "",
    password: "",
  });

  //Extraigo startRegister (funcion la cual realiza el registro si los argumentos son correctos,
  //en caso contrario,hace que el errror se muestre en el formulario)
  const { startRegister, user } = useAuthStore();





  //Tras realizar el submit se intenta registar al usuario
  const accionTrasSubmit = async () => {
 
    try {
  
      await startRegister(email, password);
      
   
    } catch (error) {
      console.log("Ha ocurrido un error tras el submit de register");
    }
  };
  



//Esta funcion es la que se llama tras realizar el submit
  const onHandleSubmit =  async (e) => {
    handleSubmit(e, accionTrasSubmit);
    setactivo(true);
    
   };



  return (
    <>
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className=" bg-light rounded col-md-6 col-lg-4">
            <h1 className="text-center">Register</h1>
            <form onSubmit={onHandleSubmit} action="">
              {/* Email Section */}
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Introduce el email"
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>

              {/* Password Section */}
              <div className="form-group mb-3">
                <label htmlFor="password">Contraseña</label>
                <input
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Introduce la contraseña"
                  type="password"
                  name="password"
                  id="password"
                  className="form-control" 
                />
              </div>

              {user.error&&activo ? (
                <div>
                  <p className="text-danger">{user.error}</p>
                </div>
              ) : (
                ""
              )}

              {/* Button Section */}
              <div className="d-flex justify-content-start">
                <button type="submit" className="btn btn-primary">
                  Crear Cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
