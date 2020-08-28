const express = require("express");

const app = express();

const PORT = 4000;

function handleListen() {
  console.log(`[V] Listen on : http://localhost:${PORT}`);
}

app.listen(PORT, handleListen);
