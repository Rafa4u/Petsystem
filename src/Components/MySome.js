import React from "react";
import "../Css/MySome.css";

function MySome(props) {
  const { num1, num2, num3 } = props;

  return (
    <div id="DivMySome">
      <p>Sua soma é: {(num1 + num2) * num3}</p>
    </div>
  );
}

export default MySome;
