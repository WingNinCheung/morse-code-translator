import { useState } from "react";
import "./App.css";

function App() {
  const [inputString, setInputString] = useState("");
  const convertString = async () => {
    const res = await fetch("http://localhost:5001/test");
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
        <div>Morse code: </div>
      </div>
    </div>
  );
}

export default App;
