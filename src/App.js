import './Css/App.css';
import React from 'react';
import ButtonAppBar from './Components/NavBar';
import Simple from './Components/List';
import Logo from './Pictures/logo.png';
import Qrcodefunction from './Components/Qrcode';
import Generator from './Components/QrCodeGenerator';
import BasicButtons from './Components/ButtonClick';
import BasicSelect from './Components/Select';
import CheckboxesGroup from './Components/CheckBoxes';
import Ad from './Pictures/adbulldog.png';
import Types from './Components/Text';
import Agenda from './Components/Agenda';
import NutritionTable from './Components/Table';

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
    <br></br>
    <Agenda />
    <br></br>
    <NutritionTable data={{
  calories: 250,
  totalFat: 12,
  saturatedFat: 4,
  transFat: 0,
  cholesterol: 60,
  sodium: 380,
  totalCarbohydrate: 32,
  dietaryFiber: 3,
  sugars: 8,
  protein: 6,
  vitaminA: 10,
  vitaminC: 4,
  calcium: 20,
  iron: 8
}} />
<br></br>
    <BasicSelect /> 
    <CheckboxesGroup />
    <Simple />
    </div>
    
  );
}

export default App;
