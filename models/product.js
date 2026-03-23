import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name:String,
  
  price:Number,
  description:String
  brand:String,
  category:String,
  stock:Number,


})

const Product = mongoose.model("Product", productSchema);

export default Product;
