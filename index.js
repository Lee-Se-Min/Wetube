import express from "express";

const app = express();

const PORT = 4000;

const handleListen = () => {
  console.log(`[V] Listen on : http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("Hello from Home");
};
const handleProfile = (req, res) => {
  res.send("Your on my Profile");
};

const betweenMiddleWare = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenMiddleWare);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListen);
