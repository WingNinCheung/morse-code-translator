const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// Only accept one letter to convert
app.get("/translate/:letter", (req, res) => {
  const letter = req.params.letter.toUpperCase();
  if (letter.trim().length !== 1 || !/[A-Z]/.test(letter)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please only enter one letter" });
  }
  return res.json(morseCode[letter]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
