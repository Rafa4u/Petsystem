import { useState } from "react";

export default function Qrcodefunction() {
  const [text, setText] = useState("");

  return (
    <div id="Divqrcode"> 
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
    </div>
  );
}