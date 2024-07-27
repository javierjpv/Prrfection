import { useEffect, useState } from "react";;
import { filtrosHelper } from "../helpers/filtrsoHelper";
import { NuevoBoton } from "./NuevoBoton";

//Componente que contendra los botones de filrado de un tipo en concreto,se le debe pasar un valor y una clave(es un id)
export const ComponenteNuevo = ({ clave}) => {


  const [lastSelectedButton, setLastSelectedButton] = useState(null);
  const [filtros, setfiltros] = useState([]);
  

  console.log(filtros)
  
const getFiltros=async()=>{
    try {
      
        //Se realiza la peticion al backend para obteenr todos los pedidos
        const jsonData=await filtrosHelper(clave)
        console.log('COMPONENTENUEVOOOOO', JSON.stringify(jsonData));
      
          setfiltros(jsonData)
        

        
        
       } catch (error) {
        console.log(error)
        
       }
}

useEffect(() => {
  getFiltros()


}, [])





  const handleSelectedButton = (valor) => {
    setLastSelectedButton(valor);
  };

  

  return (
    <div>
      {filtros.length > 0 ? (
        filtros.map((filtro) => (
          <NuevoBoton key={filtro.id} valor={filtro.id} clave={clave} handleSelectedButton={handleSelectedButton} lastSelectedButton={lastSelectedButton} nombre={filtro.nombre}/>
        ))
      ) : (
<div className="spinner-border spinner-border-sm" role="status">
  <span className="sr-only"></span>
</div>
      )}
    </div>
  );
};