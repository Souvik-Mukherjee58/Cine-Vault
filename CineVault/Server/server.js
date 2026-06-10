const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";


if (!API_KEY) {
  console.error("❌ Missing TMDB_API_KEY in .env file");
  process.exit(1);
}


app.get("/", (req, res) => {
  res.send("TMDB Backend is running 🚀");
});


app.get("/popular", async (req, res) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching popular movies" });
  }
});



app.get("/search", async (req, res) => {
  try {
    const query = req.query.query; 

    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ message: "Error searching movies" });
  }
});



app.get("/movie/:id", async (req, res) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${req.params.id}?api_key=${API_KEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching movie details" });
  }
});


app.get("/trailer/:id", async (req, res) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${req.params.id}/videos?api_key=${API_KEY}`
    );

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return res.json({ key: null });
    }

    const trailer = data.results.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    );

    res.json({
      key: trailer?.key || null, 
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching trailer" });
  }
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});