import './App.css';
import React from 'react';
import ButtonAppBar from './Components/NavBar';
import Simple from './Components/List';
import Logo from './logo.png';
import Qrcodefunction from './Components/Qrcode';
import Generator from './Components/QrCodeGenerator';
import BasicButtons from './Components/ButtonClick';
import BasicSelect from './Components/Select';
import CheckboxesGroup from './Components/CheckBoxes';
import Ad from './adbulldog.png';
import Types from './Components/Text';

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
