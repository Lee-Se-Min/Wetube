import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser, { urlencoded } from "body-parser";
import cookieParser from "cookie-parser";

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

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListen);
