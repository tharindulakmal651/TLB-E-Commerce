import express from "express";
import Product from "../models/product.js";
import { getProduct, createProduct , deleteProduct, getProductByName ,/*getProductSearch*/} from "../controllers/productController.js";


const productRouter = express.Router();



productRouter.get("/", getProduct)


 
productRouter.get("/:name", getProductByName)
productRouter.post("/", createProduct)
productRouter.delete("/", deleteProduct)
//productRouter.post("/search", getProductSearch)




export default productRouter;