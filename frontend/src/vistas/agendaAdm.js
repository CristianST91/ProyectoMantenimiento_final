import '../estilos/agenda.css';
import React, { useDebugValue } from 'react';
import Boton from '../componentes/Boton';
import LineaForm from '../componentes/LineaForm';

function AgendaAdm() {
 
  const num = 0;



  return (
    <div className='flx'>
      <div className='area'></div>
      <div className='area-agend'>
      <div className='section-logo'>
        <div className='section-logo-side'></div>
        <div className='section-logo-center'>
          <img src={require('../Logo.PNG')} className='imag-agend'/>
          <h2 className='h2'>Maintenance +</h2>
        </div>
        <div className='section-logo-side'>
          <Boton 
            texto='Log out' 
            tipoBoton='boton-negro'
           /*  clic={clic} */ />
        </div>
      </div>
      
        <div className='fnt flx sep-c'>
            <div className='flx'>
              <p className='padd-h'>Date</p>
              <LineaForm
                clase='fnt box-g flx date-box'
                tipoEntrada='date' />
            </div>
            <div className='flx'>
              <p className='padd-h'>OT_N°</p>
              <output className='fnt box-g flx num-box' >{num}</output>
            </div>
            <div className='flx'> 
                <p className='padd-h'>Time</p> 
               <LineaForm
                clase='fnt box-g flx num-box'
                tipoEntrada='number' />
            </div>  
          </div>
          <div className="fnt flx sep-c" >
            <p className='padd-h'>Responsible</p>
            <select className="select-box" onChange="changeOrder();" required>
            </select>
          </div>
          <div className="fnt flx sep-c">
            <p className='padd-h'>Activity</p>
            <LineaForm
              clase='fnt box-g flx line-t'
              tipoEntrada='text'/>
          </div >
          <div className="fnt flx sep-c">
            <p className='flx left'>Suggestions:</p>
          </div>
          <div className="fnt flx">
            <textarea
              className="fnt text-box"
              rows="2" placeholder="Tips for the activity developer">
            </textarea>
          </div>
          
          <div className='fnt flx'>
            <div className='flx'>
              <p className='padd-h'>Real Time</p>
              <LineaForm
                clase='fnt box-g flx num-box'
                tipoEntrada='number' />
            </div>
           
            <div className='flx'>
              <p className='padd-h'>Activity Finished!</p> 
              <LineaForm
                clase = 'check-box'
                tipoEntrada='checkbox'
                mensaje = 'Create a team and its account manager'
                texto = '' />
            </div>
          </div>
          <div className="fnt flx sep-c">
            <p className='flx left'>Notes:</p>
          </div>
          <div className="fnt flx">
            <textarea
              className="fnt text-box"
              rows="2" placeholder="Notes, drawbacks">
            </textarea>
          </div>
          <div className='spc-v'/>
          <div className='flx sep-c'>
            <Boton 
              texto = 'New'
              tipoBoton = 'boton-negro'
              /* clic = {clic} */ />
            <Boton 
              texto='Save' 
              tipoBoton='boton-negro'
              /* clic={clic} */ />
            <Boton 
              texto='Del' 
              tipoBoton='boton-negro'
              /* clic={clic} */ />
          </div>
      </div>
      <div className='area'></div>
    </div>

  );
}

export default AgendaAdm;
