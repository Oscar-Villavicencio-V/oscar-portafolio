import React, { Component } from 'react';
import "./App.css"
import emailjs from 'emailjs-com';

export default class Contacto extends Component {
    render() {
        function enviarEmail(e){
            e.preventDefault();

            emailjs.sendForm('service_irl9u2p','template_nusnwqn',e.target,'Zp5NqDmAAkJKGmTgi').then(res=>{
                console.log(res);
            })
        }
        return (
          <div className="App">
            <h2>Contacto: </h2>
          <p id='pperfil'>
           <form onSubmit={enviarEmail}>

               <input className='word' type="text" id="nombre" name="nombre" required autocomplete="off"/>
               <label for="nombre"><span>Nombre:</span></label>
               <br/>
                <input className='word'type="text" id="email" name="email"required autocomplete="off"/>
                <label for="nombre"><span>Correo:</span></label>
                <br/>
                <textarea className='word'type="text" id="mensaje" name="mensaje"required autocomplete="off"/>
                <label for="nombre"><span>Mensaje:</span></label>
                <br/><br/><br/><br/><br/><br/>
                <button type="submit">Enviar Correo</button>
                <br/><br/>
              </form>
              </p>
          </div>
        )
    }
}