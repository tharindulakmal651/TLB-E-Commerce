import Product from "../models/product.js"

export function getProduct(req, res) {
    Product.find()
        .then((ProductsList) => {
            res.json({ list: ProductsList })
        })
        .catch((err) => {
            res.status(500).json({ message: "Error retrieving Product", error: err.message })
        })
}

export function createProduct(req,res) {
    const NewProduct = new Product(req.body)    
    NewProduct.save().then(() => {
        res.json({
            message: "Product created successfully !!!"
        })
    }).catch(() => {
        res.json({
            message: "Error creating Product !!!"
        })
    })
}


export function deleteProduct(req,res) {
    Product.deleteOne({name :req.body.name } ).then(
        ()=> {
            res.json(
            {
                message: "Product deleted successfully !!!"
            }
          )
        } 
        
        )
    }




export function getProductByName(req, res) {
    const name = req.params.name;
        
        Product.find({ name: name }).then(
            (productList) => {
                res.json({
                    list: productList
                })

    }
        
) .catch(
    ()=> {
        res.json({
            message: "Error retrieving Product !!!"
        })
    }
)

}




