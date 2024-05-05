import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout,onRegister} from "../Store/auth/authSlice";
import { loginHelper } from "../Auth/Helpers/loginHelper";
import { registerHelper } from "../Auth/Helpers/registerHelper";

//Esto es un customHook para el estado global de la autenticacion
export const useAuthStore = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();


  //Cuando se quiera hacer un login de un usuario se llama a esta funcion pasandole un email y un password
  const startLogin = async (email, password) => {

  
    try {
    //El estado del usuario se inicia en "CHECKING"
    dispatch(onChecking());
      //Se  realiza la solicitud al backend
      const data = await loginHelper(email, password);
  
     //Si la respuesta del backendo contiene un token  se guardara el token en el localStorage y  el estado del usuario pasara a "AUTHENTICATED" 
     //a traves de redux
      if (data.token) {
        const jwt=data.token
        const email=data.email
       
        localStorage.setItem("token", data.token);
        dispatch(onLogin({ jwt ,email}));
      } else {
        //En caso contarrio se guardara el error gracias a redux para poder ser usado y mostrarlo donde corresponda,ademas ,el estado del usuario 
        //sera "NOT-AUTHENTICATED"
        const error=data.error
        dispatch(onLogout({ error}));
        console.log("No token received:", data.error);
        // Manejar el caso en el que no se recibe un token del servidor
      }
    } catch (error) {
      console.log("Login error:", error);
      // Manejar el error de la solicitud al servidor
    }
  };

  //Funcion para el registro de nuevos usuarios
  const startRegister = async (email,password) => {
    
  
    try {
      //El estado del usuario empezara en "CHECKING"
      dispatch(onChecking());
      //Se realizara la peticion al backend
      const data = await registerHelper(email, password);
      
  //Si la respuesta contiene un token este se guardara en el estado global del usuario ,ademas se guardara ese token en el localStorage y 
  //el estado del usuario sera "AUTHENTICATED"
      if (data.token) {
        const jwt=data.token
        const email=data.email
        localStorage.setItem("token", data.token);
        dispatch(onRegister({ jwt }));
      } else {
        //En caso contrario se guardara el error recibido  y el estado "NOT-AUTHENTICATED" en el estado global del usuario (redux) 
        const error=data.error
        dispatch(onLogout({ error}));


        console.log("No token received:", data.error);
     
        // Manejar el caso en el que no se recibe un token del servidor
      }
    } catch (error) {
      
      dispatch(onLogout(error));
   
      // Manejar el error de la solicitud al servidor
    }
  };


//Funcion usada al hacer logout
  const startLogout = () => {
    
    const error=""
    dispatch(onLogout(error));
  };

  //Se retorna un objeto con las funciones y las propiedades relacionadas con la autenticacion
  return {
    user,
    startLogin,
    startLogout,
    startRegister,
  };
};
