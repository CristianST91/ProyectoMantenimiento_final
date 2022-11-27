import React from 'react';
import '../estilos/Boton.css';
import { Link } from "react-router-dom";

function Boton({ dir, texto, tipoBoton, clic }) {
  return (
    <Link to={dir} className={'btn'+' '+tipoBoton} onClick={clic}>
      {texto}
    </Link>
  );
}

export default Boton;
