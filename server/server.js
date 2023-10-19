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
app.post("/translate/toMorse", (req, res) => {
  let inputLetter = req.body.text.toUpperCase();
  if (inputLetter.trim().length !== 1 || !/[A-Z]/.test(inputLetter)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please only enter one letter" });
  }

  return res.json(morseCode[inputLetter]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
