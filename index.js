import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import authorsRoute from "./routes/authorsRoute.js";

dotenv.config();
const { MONGO_URI } = process.env;

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/books", booksRoute);
app.use("/authors", authorsRoute);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected with Mongo!!!");
    app.listen(3000, () => {
      console.log("The server is listening at port 3000!");
    });
  })
  .catch((err) => console.error(err));
