const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Retrieve the API_KEY from environment variables
const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY is not defined. Please provide it as an environment variable.");
  process.exit(1); // Exit the application if API_KEY is missing
}

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Node.js Application</h1>
    <p>The API Key from GitHub Secrets is: <strong>${apiKey}</strong></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API Key: ${apiKey}`);
});
