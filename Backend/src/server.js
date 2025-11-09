import dotenv from "dotenv"
dotenv.config();
import express from "express"
const app = express();

app.listen(()=>{
    console.log("server is running",3000);
});