const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.write(" <h1> Welcome to Home page</h1>");
  res.write(" <p> Welcome to Home page </p>");
  res.send();
});

app.get("/about", (req, res) => {
  res.send("Welcome to About page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to Contact page");
});

app.get("/temp", (req, res) => {
  res.json([
    {
      id: 45,
      name: "Shoaib",
    },
    {
      id: 45,
      name: "Shoaib",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening to the port on ${port}`);
});
