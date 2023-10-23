import { useState } from "react";
import "./App.css";

function App() {
  const [inputString, setInputString] = useState("");
  const [morseCode, setMorseCode] = useState("");

  const getMorseTranslation = async (letter) => {
    try {
      const res = await fetch(`http://localhost:5001/translate/${letter}`);
      if (res.ok) {
        const code = await res.json();
        return code;
      } else {
        const error = await res.json();
        return error.error;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const convertString = async () => {
    const promises = [];
    for (let letter of inputString.trim().toUpperCase()) {
      // use "|" to separate each word
      if (letter === " ") {
        promises.push("|");
      } else if (!/[A-Z]/.test(letter)) {
        return setMorseCode(await getMorseTranslation(letter));
      } else {
        promises.push(getMorseTranslation(letter));
      }
    }
    // resolve them concurrently instead of awaiting each letter on every call
    setMorseCode((await Promise.all(promises)).join(" "));
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
