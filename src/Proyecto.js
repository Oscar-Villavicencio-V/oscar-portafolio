import React from "react";
import "./App.css"
export default function Proyecto(){
    return(
        <div className="App">
        <h2>Proyectos</h2>
		<div class="section full-height over-hide px-4 px-sm-0">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-lg-10 col-xl-8 align-self-center padding-tb">
					<div class="section mx-auto text-center slider-height-padding">
			          	<input class="checkbox frst" type="radio" id="slide-1" name="slider" checked/>
			          	<label for="slide-1"></label>
			          	<input class="checkbox scnd" type="radio" name="slider" id="slider-2" checked/>
			          	<label for="slider-2"></label>
			          	<input class="checkbox thrd" type="radio" name="slider" id="slider-3" checked/>
			          	<label for="slider-3"></label>
			          	<input class="checkbox foth" type="radio" name="slider" id="slider-4" checked/>
			          	<label for="slider-4"></label>
						<input class="checkbox fith" type="radio" name="slider" id="slider-5" checked/>
			          	<label for="slider-5"></label>
						<ul>
							<dd className="ga">	
						    </dd>
							<dd className="ga">
						    </dd>
							<dd className="ga">
						    </dd>
							<dd className="ga">
						    </dd>
							<dd className="ga">
						    </dd>
					    </ul></div></div></div>
	    </div>
	</div>
        <h3 id="hperfil">Sistema de Geolocalización para unidades de carga</h3>
       <p id="pperfil">Desarrollo de Sistema de Geolocalización para camiones de carga, 
      consiste en un App Cliente (Aplicación móvil Android) y un Servidor Web (Sistema web).
      Funciona mediante conexión a internet, protocolos HTTP, contiene API de Google Maps y de OpenStreetMaps.
      Trabajamos a partir de algunos repositorios de GitHub y funjí como programador jr.
        </p>
	
</div>

    );
}