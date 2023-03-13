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


function App() {
  return (
    <div className="App">
    <ButtonAppBar />  
    <img src={Logo} alt="company logo" /><br></br>
    <Qrcodefunction />
    <Generator />
    <BasicButtons /> <br></br>
    <BasicSelect />
    <CheckboxesGroup />
    <Simple />
    </div>
    
  );
}

export default App;
