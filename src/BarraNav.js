import React from'react';
import './App.css';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import Contacto from './Contacto';
import Skills from './Skills';
import Proyecto from './Proyecto';
import Home from './Home';

export default function BarraNav(){
    return (
<div id='navbar'>
<BrowserRouter>
<tr>
          <li><Link to='/'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="40" height="40"
viewBox="0 0 24 24">
<path d="M19,11v9h-5v-6h-4v6H5v-9H3.6L12,3.4l8.4,7.6H19z" opacity=".3"></path><path d="M20,21h-7v-6h-2v6H4v-9H1l11-9.9L23,12h-3V21z M15,19h3v-8.8l-6-5.4l-6,5.4V19h3v-6h6V19z"></path>
</svg></Link></li>
<li>
<Link to="Proyecto"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="40" height="40"
viewBox="0 0 24 24">
<path d="M20,19H4c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v12C21,18.6,20.6,19,20,19z" opacity=".3"></path><path d="M9 3H15V5H9z"></path><path d="M20,20H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v12C22,19.1,21.1,20,20,20z M20,18v1V18L20,18z M4,6v12h16 l0-12H4z"></path><path d="M12 10A1 1 0 1 0 12 12A1 1 0 1 0 12 10Z"></path><path d="M20,16H4c-1.1,0-2-0.9-2-2v-4h2v4h16v-4h2v4C22,15.1,21.1,16,20,16z"></path>
</svg></Link>
</li>
          
          <li>
          <Link to="Skills">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="40" height="40"
viewBox="0 0 24 24">
<path d="M20,11h-1V6c0-0.6-0.4-1-1-1h-5V4c0-1.1-0.9-2-2-2S9,2.9,9,4v1H4C3.4,5,3,5.4,3,6v5h1c1.1,0,2,0.9,2,2s-0.9,2-2,2H3v5 c0,0.6,0.4,1,1,1h5v-1c0-1.1,0.9-2,2-2s2,0.9,2,2v1h5c0.6,0,1-0.4,1-1v-5h1c1.1,0,2-0.9,2-2S21.1,11,20,11z" opacity=".3"></path><path d="M18,22h-6v-2c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1v2H4c-1.1,0-2-0.9-2-2v-6h2c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H2V6 c0-1.1,0.9-2,2-2h4c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3h4c1.1,0,2,0.9,2,2v4c1.7,0,3,1.3,3,3c0,1.7-1.3,3-3,3v4 C20,21.1,19.1,22,18,22z M14,20h4v-6h2c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1h-2V6h-6V4c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1v2H4v4 c1.7,0,3,1.3,3,3c0,1.7-1.3,3-3,3v4h4c0-1.7,1.3-3,3-3C12.7,17,14,18.3,14,20z"></path>
</svg>
</Link> 
</li>

          <li> 
        <Link to="Contacto"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="40" height="40"
viewBox="0 0 24 24">
<path d="M18,3H6C5.448,3,5,3.448,5,4v16c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1V4C19,3.448,18.552,3,18,3z M12,7c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2s-2-0.895-2-2C10,7.895,10.895,7,12,7z M8,17c0-1.657,1.343-3,3-3h2c1.657,0,3,1.343,3,3H8z" opacity=".3"></path><path d="M12 12c1.682 0 3-1.317 3-3s-1.318-3-3-3S9 7.317 9 9 10.318 12 12 12zM12 8c.58 0 1 .421 1 1s-.42 1-1 1-1-.421-1-1S11.42 8 12 8zM12 13c-2.851 0-5 1.455-5 3.384V18h10v-1.616C17 14.455 14.851 13 12 13zM9.146 16c.363-.496 1.384-1 2.854-1s2.49.504 2.854 1H9.146z"></path><path d="M4,20V4c0-1.103,0.897-2,2-2h12c1.103,0,2,0.897,2,2v16c0,1.103-0.897,2-2,2H6C4.897,22,4,21.103,4,20z M18,4H6v16.001L18,20V4z"></path>
</svg></Link>    
          </li> </tr> 
      <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="Proyecto" element ={<Proyecto/>}/>
          <Route path="Skills" element ={<Skills/>}/>
          <Route path="Contacto" element ={<Contacto/>}/>
        </Routes>
        </BrowserRouter>
        </div>      
    );
}