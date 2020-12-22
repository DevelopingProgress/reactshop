import express from 'express';
import dotenv from 'dotenv';
import config from "./config";
import mongoose from 'mongoose';
import bodyParser from  'body-parser';
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import Product from "./models/productModel";
import * as res from "express";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);





app.listen(6000, ()=> {console.log("Server started at http://localhost:6000")});
