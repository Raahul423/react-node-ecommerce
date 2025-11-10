import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./src/database.js";

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

app.get("/",async(req,res)=>{
    try {
        res.json(
            {
                message:"hello server"
            }
        )
    } catch (error) {
        throw new Error("Something wrong",error)
    }
})

connectDB().then(() => {
  app.listen(process.env.PORT,() => {
    console.log("server is running", process.env.PORT);
  });
});
