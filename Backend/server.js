import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./src/Database/database.js";
import { router } from "./src/Route/user.route.js";
import { category } from "./src/Route/category.route.js";
import { product } from "./src/Route/product.route.js";
import { cartItem } from "./src/Route/cartItem.route.js";
import { wishlistrouter } from "./src/Route/wishlist.route.js";
import { addressroute } from "./src/Route/address.route.js";


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
app.use('/api/categories',category)
app.use('/api/products',product)
app.use('/api/cartitems',cartItem)
app.use('/api/wishlist',wishlistrouter)
app.use('/api/address',addressroute)

connectDB().then(() => {
  app.listen(process.env.PORT,() => {
    console.log("server is running", process.env.PORT);
  });
});
