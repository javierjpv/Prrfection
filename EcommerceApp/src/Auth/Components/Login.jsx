import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { useAuthStore } from "../../Hooks/useAuthStore";

export const Login = () => {

  //Se usa este useState para saber si se ha hecho submit o no en este formulario
  const [activo, setactivo] = useState(false)

  //Uso mi customHook para el manejo de formularios
  const { email, password, handleSubmit, handleOnChange } = useForm({
    email: "",
    password: "",
  });

  const { startLogin,user } = useAuthStore();



  const accionTrasSubmit = async () => {
    
    try {
      //Se intenta realizar el login y si no se mostrara en este mismo componente el tipo de eroor que es (Se mostarra encima del boton de inicio sesion)
      //Fijate en que el error se mustra o no y eso lo sabremos por redux mediante user.error
      startLogin(email,password);
      console.log(user);

    } catch (error) {
     console.log(error)
    }
  };

  

  const onHandleSubmit = (e) => {
    handleSubmit(e, accionTrasSubmit);
    setactivo(true);
  };

  return (
    <>
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className="bg-light rounded col-md-6 col-lg-4">
            <h1 className="text-center">Login</h1>
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
              
              {/* si hay un error en el contexto de user  y este componente esta activo mostrar errores */}
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
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
