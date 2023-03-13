import { useState } from "react";

export default function Qrcodefunction() {
  const [text, setText] = useState("");

  return (
    <div> 
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
    </div>
  );
}