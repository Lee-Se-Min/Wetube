const express = require("express");

const app = express();

const PORT = 4000;

function handleListen() {
  console.log(`[V] Listen on : http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello from Home");
}
function handleProfile(req, res) {
  res.send("Your on my Profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListen);
