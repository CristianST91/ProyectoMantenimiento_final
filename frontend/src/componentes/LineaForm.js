import React from 'react';
import '../estilos/tags.css';
import '../estilos/general.css';

function LineaForm({ clase, tipoEntrada, nombre, mensaje, texto, clic, alerta }) {
  return (
 
    <div className='flx col t-spc'>
    <input
      className = {clase}
      type={tipoEntrada}
      placeholder={nombre}
      title= {mensaje}
      value={texto}
      id={nombre}
      name={nombre}
      onSubmit={clic} />
    
    <label 
      className='alert'>
      {alerta}
    </label> 
    </div>
  );
}

export default LineaForm;