import './App.css';
import React from 'react';
import ButtonAppBar from './NavBar';
import Recipe from './Card';
import Simple from './List';
import qrcode from './QR_code.png';
import Logo from './logo.png';



function App() {
  return (
    <div className="App">
    <ButtonAppBar />  
    <img src={Logo} alt="company logo" /><br></br>
    <img src={qrcode} alt="qrcode" width="300" height="300" />
    <Recipe />
    <Simple />
    </div>
    
  );
}

export default App;
