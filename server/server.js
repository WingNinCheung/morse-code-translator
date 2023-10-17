const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());

// Define a route for serving your React app
app.get("/test", (req, res) => {
  res.json({ message: "This is a test response from the server." });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
