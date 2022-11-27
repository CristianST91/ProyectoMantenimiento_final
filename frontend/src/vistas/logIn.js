import '../estilos/logueo.css';
import '../estilos/general.css'
import React from 'react';
import Boton from '../componentes/Boton';
import LineaForm from '../componentes/LineaForm';


function LogIn() {

  const clic = async (evt) => {
      evt.preventDefault()
    
      const userlog = {
        team: document.getElementById('Team').value,
        userName: document.getElementById('UserName').value,
        password: document.getElementById('Password').value
        }
        console.log(userlog);

      await fetch('http://localhost:3001/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userlog)
      }).then(response => response.json())
      .catch(error => console.error('Error:', error))
      //.then(response => console.log('Success:', response));
      
      
      const resp = await fetch('http://localhost:3001/api/login')
      let dataUser = await resp.json()
      console.log(dataUser);
   
    }
  

  return (
   <form >
      <div className='section-menu'>
        <img src={require('../Logo.PNG')} className='img' />
        <h1 className='h1'>Maintenance +</h1>
      </div>
    <div className='flx lin c no-sep'>
      <Boton 
        texto = 'Log In'
        tipoBoton = 'boton-blanco'
         />
        <div className='spc-h'/>
      <Boton 
        dir = 'SignUp'
        texto = 'Sign Up'
        tipoBoton = 'boton-blanco'
         />
    </div>
    <div className='spc-v'/>
    <div className='flx col c no-sep'>
      <LineaForm
        clase = 'fnt box-g flx inp-log'
        alerta = ''
        tipoEntrada='text'
        nombre = 'Team' />
      <div className='spc-v'/>
      <LineaForm
        clase = 'fnt box-g flx inp-log'
        alerta = ''
        tipoEntrada='text'
        nombre = 'UserName' />
      <div className='spc-v'/>
      <LineaForm
        clase = 'fnt box-g flx inp-log'
        alerta = ''
        tipoEntrada='password'
        nombre = 'Password' />
      <div className='spc-v'/>
      <Boton 
        dir={()=>{return 'df'}}
        type='submit'
        texto = 'Log In'
        tipoBoton = 'boton-negro'
        clic={clic}
         />
    </div> 
   </form>   
  );
}

export default LogIn;