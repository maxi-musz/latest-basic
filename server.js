import express from 'express';
import { DateTime } from 'luxon'; 
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors())

// my registered email address
const email = 'bernardmayowaa@gmail.com'; 

// GitHub URL of my project's codebase
const github_url = 'https://github.com/maxi-musz/latest-basic.git';

// API endpoint
app.get('/api/v1', (req, res) => {
  const current_datetime = DateTime.utc().toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");

  const response = {
    email,
    current_datetime,
    github_url,
  };

  res.json(response);
});

app.get('/ping', (req, res) => {
  res.status(200).send('Pong!');
});

app.get("*", (req, res) => {
  console.error("Endpoint not found")
  res.status(404).json({
    success: false, 
    message: "Not found, correct endpoint is https://latest-basic.onrender.com/api/v1"
  })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});