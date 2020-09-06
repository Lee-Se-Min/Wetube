import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser, { urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/videos", videoRouter);

export default app;
