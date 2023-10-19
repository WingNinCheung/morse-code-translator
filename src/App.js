import { useState } from "react";
import "./App.css";

function App() {
  const [inputString, setInputString] = useState("");
  const [morseCode, setMorseCode] = useState("");
  const convertString = async () => {
    const data = { text: inputString };
    try {
      const res = await fetch("http://localhost:5001/translate/toMorse/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const code = await res.json();
        setMorseCode(code);
      } else {
        const error = await res.json();
        setMorseCode(error.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Morse Code Translator</h1>
      <div className="input">
        <span>Enter text: </span>
        <input onChange={(e) => setInputString(e.target.value)}></input>
        <button onClick={convertString}>Convert</button>
      </div>
      <div className="output">
        <span>Morse code: </span>
        <span>{morseCode}</span>
      </div>
    </div>
  );
}

export default App;
