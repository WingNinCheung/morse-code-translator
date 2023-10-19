import { useState } from "react";
import "./App.css";

function App() {
  const [inputString, setInputString] = useState("");
  const convertString = async () => {
    const data = { text: inputString };
    const res = await fetch("http://localhost:5001/translate/toMorse/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(await res.json());
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
        <span>{inputString}</span>
      </div>
    </div>
  );
}

export default App;
