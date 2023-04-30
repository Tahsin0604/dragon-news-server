const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 4000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("HelLo World");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});
app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.send(news);
  } else {
    const filteredNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(filteredNews);
  }
});
app.listen(port, () => {
  console.log(`Port number: ${port}`);
});
