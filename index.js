import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Student from "./models/student.js";
import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";
import Product from "./models/product.js";


const app = express();

const mongoURL = "mongodb+srv://admin:123@cluster0.n1fvej0.mongodb.net/?appName=Cluster0";

mongoose.connect(mongoURL);

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});




app.use(bodyParser.json());


app.use("/api/students", studentRouter);
app.use("/api/products", productRouter);


app.listen(5000, () => {
    console.log("Server is running on port 3000");
});