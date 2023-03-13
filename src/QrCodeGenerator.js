import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";
import './App.css';


export default function Generator() {
  const [text, setText] = useState("");
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      // QR code doesn't work with an empty string
      // so we are using a blank space as a fallback
      text || " ",
      (error) => error && console.error(error)
    );
  }, [text]);

  return (
    <div className="Divqrcode">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />

      <canvas ref={canvasRef} />
    </div>
  );
}