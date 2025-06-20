/// cravekart-backend/index.js

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:5173','https://crave-kart-tan.vercel.app/']  // 
}));

app.get("/swiggy", async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).json({ error: "Missing 'url' query parameter." });
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Swiggy." });
  }
});

app.get("/swiggy/menu", async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).json({ error: "Missing 'url' query parameter." });
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Swiggy." });
  }
});


app.listen(PORT, () => {
  console.log(`✅ CraveKart backend running at http://localhost:${PORT}`);
});
