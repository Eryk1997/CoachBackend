const Product = require("../models/Product")

exports.selectAllProducts = async (req,res) => {

    //Wyświetla wszystkie produkty
    const products = await Product.query();
    
    res.json(products);
}