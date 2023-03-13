import './App.css';
import React from 'react';
import ButtonAppBar from './NavBar';
import Simple from './List';
import Logo from './logo.png';
import Qrcodefunction from './Qrcode';
import Generator from './QrCodeGenerator';
import BasicButtons from './ButtonClick';
import BasicSelect from './Select';
import CheckboxesGroup from './CheckBoxes';
import Ad from './adbulldog.png';
import Types from './Text';

function App() {
  return (
    <div className="App">
    <ButtonAppBar />  
    <img id="Logo" src={Logo} alt="company logo" />
    <img id="bulldog" src={Ad} alt="company ad" />
    <Types />
    <Qrcodefunction />
    <Generator />
    <BasicButtons />
    <BasicSelect /> 
    <CheckboxesGroup />
    <Simple />
    </div>
    
  );
}

export default App;
