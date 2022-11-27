
import '../estilos/logueo.css';
import React from 'react';
import Boton from '../componentes/Boton';
import LineaForm from '../componentes/LineaForm';


function SignUp() {



  return (
   <div>
      <div className='section-menu'>
        <img src={require('../Logo.PNG')} className='img'/>
        <h1 className='h1'>Maintenance +</h1>
      </div>
    <div className='flx lin c no-sep'>
      <Boton
        dir = '../'
        texto = 'Log In'
        tipoBoton = 'boton-blanco'
        /* clic = {clic} */ />
        <div className='spc-h'/>
      <Boton 
        texto = 'Sign Up'
        tipoBoton = 'boton-blanco'
        /* clic = {clic} */ />
    </div>
    <div className='flx col c no-sep'>
      <div className='spc-v'/>
      <LineaForm
        clase = 'fnt box-g flx inp-log'
        alerta = ''
        tipoEntrada='text'
        nombre = 'Name' />
      <div className='spc-v'/>
      <LineaForm
        clase = 'fnt box-g flx inp-log'
        alerta = ''
        tipoEntrada='text'
        nombre = 'Last name' />
      <div className='spc-v'/>
      <LineaForm
        clase = 'fnt box-g flx inp-log'
        alerta = ''
        tipoEntrada='text'
        nombre = 'Username' />
      <div className='spc-v'/>
      <LineaForm
        clase = 'fnt box-g flx inp-log'
        alerta = ''
        tipoEntrada='password'
        nombre = 'Password' />
      <div className='spc-v'/>
      <LineaForm
        clase = 'fnt box-g flx inp-log'
        alerta = ''
        tipoEntrada='text'
        nombre = 'Team' />
      <div className='spc-v'/>
      <LineaForm
        clase = 'check-box'
        alerta = ''
        tipoEntrada='checkbox'
        mensaje = 'Create a team and its account manager'
        texto = '' />
        
      <Boton
        texto = 'Sign Up'
        tipoBoton = ' boton-negro'
        /* clic = {clic} */ />
    </div> 
   </div>   
  );
}

export default SignUp;