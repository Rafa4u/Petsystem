import './App.css';
import React from 'react';
import ButtonAppBar from './NavBar';
import Simple from './List';
// import qrcode from './QR_code.png';
import Logo from './logo.png';
import Qrcodefunction from './Qrcode';
import Generator from './QrCodeGenerator';



function App() {
  return (
    <div className="App">
    <ButtonAppBar />  
    <img src={Logo} alt="company logo" /><br></br>
    <Qrcodefunction />
    <Generator />
    <Simple />
    </div>
    
  );
}

export default App;
