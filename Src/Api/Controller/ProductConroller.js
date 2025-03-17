const product = require('../../DB/ProductModel')


exports.GetProduct = async (req,res) => {

    try{
        const page =  Number(req.query.page) || 1 ;
        const limit = Number(req.query.limit) || 10;
        const skip = (page-1)*limit
        const data =  await product.find().skip(skip).limit(limit)
        res.send(data)
    }
    catch{
        console.log("cant find data")
    }

}
