import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./src/Database/database.js";
import { router } from "./src/Route/user.route.js";

const app = express();
app.use(cors("*"));

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);


//route
app.use('/api/users',router)

connectDB().then(() => {
  app.listen(process.env.PORT,() => {
    console.log("server is running", process.env.PORT);
  });
});
