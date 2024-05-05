import { useState } from "react";;
import { FilterButton } from "./FilterButton";

//Componente que contendra los botones de filrado de un tipo en concreto,se le debe pasar un valor y una clave(es un id)
export const FiltroComponent = ({ clave, valores }) => {


  const [lastSelectedButton, setLastSelectedButton] = useState(null);

  
  const handleSelectedButton = (valor) => {
    setLastSelectedButton(valor);
  };


  
  return (
    <div>
      {valores.map((valor) => {
        return (
        <FilterButton  key={valor} valor={valor} clave={clave}  handleSelectedButton={handleSelectedButton} lastSelectedButton={lastSelectedButton}/>
        );
      })}

    
    </div>
  );
};

