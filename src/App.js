//import logo from './logo.svg';
import './App.css';
import React from "react"
import BarraNav from './BarraNav';
import gif from './images/gif4.gif';

function App() {

  return (
    
    <div className="App">
      <img id='gif' src={gif} alt=''></img>
      <BarraNav/>
        {/* <Home/>
      <Proyecto/>
      <Skills/> */}
         

 </div>
  );
}

export default App;
