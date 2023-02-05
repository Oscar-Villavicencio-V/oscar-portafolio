import React from "react";
import "./App.css"
import foto from './images/photo.png';
export default function Home(){
    return(
<div className="App">
<h2><img id="imgNombre"src={foto} alt=""/></h2>
      <h1><font COLOR="red">｛</font> HOLA!, SOY OSCAR VILLAVICENCIO VENTURA <font COLOR="blue">｝</font></h1>
      <br/>
      <h3 id="hperfil">Recién egresado en la carrera de Ingeniería en Sistemas Computacionales</h3>
    <br/><p id="pperfil">Soy egresado en la carrera de Ingeniería en Sistemas Computacionales, del Tecnológico de Estudios Superiores de Tianguistenco TEST. Tengo 23 años, soy de Ocoyoacac, Estado de México, México. Cuento con poca experiencia en el área laboral, pero con mucho entusiasmo por incorporarme a grades retos.</p>
    </div>
    );
}