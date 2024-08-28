import express from "express";
import { initWebRoute } from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.BACKEND_PORT || 9000;

initWebRoute(router, app);

app
  .listen(port, () => {
    console.log("Server is running on PORT", port);
  })
  .on("error", (error) => {
    console.error("Error starting the server:", error);
  });
