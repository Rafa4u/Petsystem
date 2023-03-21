import React from "react";
import '../Css/MySome.css';


function MySome(props) {
  const { num1, num2 } = props;

    return ( 
    <div id="DivMySome">
    <p>sua soma é: {num1 + num2}</p>
    </div>
    );
  }
  
  export default MySome;

  