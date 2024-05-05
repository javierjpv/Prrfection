import React, { useEffect } from "react";
import { useFiltrossStore } from "../../Hooks/useFiltrosStore";
import { useState } from "react";

export const NuevoBoton = ({ nombre,valor, clave,handleSelectedButton,lastSelectedButton}) => {
  const { startSavingFiltro,startDeletingFiltro} = useFiltrossStore();
const [filterButtonState, setfilterButtonState] = useState(false);

const handleFiltrarClick = (valor) => {
    if (!filterButtonState) {
      console.log({ [clave]: valor });
      startSavingFiltro({ [clave]: valor });
      handleSelectedButton(valor);
      
    } else {
      console.log('quitando filtro y poniendolo en false')
      startDeletingFiltro(clave)
      handleSelectedButton(null)
      
    }

    setfilterButtonState(!filterButtonState);
  };

  useEffect(() => {
    // Si este botón no es el último seleccionado, asegúrate de que su estado sea false
    if (lastSelectedButton !== valor) {
      setfilterButtonState(false);
    }
  }, [lastSelectedButton]);

  


  return (
    <>
      <button
   className={`btn ${filterButtonState && lastSelectedButton === valor ? 'btn-primary' : 'btn-outline'}`}
        onClick={() => handleFiltrarClick(valor)}
      >
        {clave} {nombre}
        
      </button>
    </>
  );
};
