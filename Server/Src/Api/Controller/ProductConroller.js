const product = require('../../DB/ProductModel')


exports.GetProduct = async (req,res) => {

    try{
        const page =  Number(req.query.page) || 1 ;
        const limit = Number(req.query.limit) || 10;
        const skip = (page-1)*limit

        const search = req.query.search || ""
        const sort = req.query.sort || ""

        const query = {
            $or: [
                { "name": { $regex: search, $options: 'i' } },
                { "category": { $regex: search, $options: 'i' } }
            ]
        };
        let data;
        if (sort) {
            data = await product.find(query).sort(sort).skip(skip).limit(limit);
        } else {
            data = await product.find(query).skip(skip).limit(limit);
        }

        res.status(200).send(data);
    }
    catch{
        res.status(500).send("Can't find data");
    }

}
