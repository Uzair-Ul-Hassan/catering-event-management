import express, { Express } from "express";
import router from "./router";
import { globalErrorHandler } from "./controllers/errorController";

const app: Express = express();

app.use(express.json());

app.use("/api/v1", router());

app.use(globalErrorHandler);

export default app;
