import { useState } from "react";
import "./App.css";

let cachedMorseCode = {};

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

  // Utilize memoization with the cachedMorseCode object to increase time efficiency
  const convertString = async () => {
    const promises = [];
    for (let letter of inputString.trim().toUpperCase()) {
      // use "|" to separate each word
      if (letter === " ") {
        promises.push("|");
      } else if (!/[A-Z]/.test(letter)) {
        return setMorseCode(await getMorseTranslation(letter));
      } else if (letter in cachedMorseCode) {
        promises.push(cachedMorseCode[letter]);
      } else {
        cachedMorseCode[letter] = getMorseTranslation(letter);
        promises.push(cachedMorseCode[letter]);
      }
    }

    // resolve them concurrently instead of awaiting each letter on every call for efficiency
    setMorseCode((await Promise.all(promises)).join(" "));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Morse Code Translator</h1>
        <div className="body">
          <div className="input">
            <span>Enter text: </span>
            <input
              onChange={(e) => setInputString(e.target.value)}
              className="text"
            ></input>
            <button onClick={convertString} className="button">
              Convert
            </button>
          </div>
          <div className="output">
            <span>Morse code: </span>
            <span>{morseCode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
