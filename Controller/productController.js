const productModel = require('../Model/productModel');



const postProducts = async (req, res)=>{
    try {
        let {productname , productWeight , productprice } = req.body

        if(!productname || !productWeight || !productprice){
                  return res.status(404).json({
            success : "false",
            message : "All feilds are require"
        }) 
        }
       productname = productname.toLowerCase().trim();

           const existing = await productModel.findOne({
        where : { productname} ,
    })

        if(existing){
        return res.status(400).json({
              success : false,
            message : "User Already Exists",
        })
    }

        await productModel.create({
            productname , productWeight , productprice
        })

           return res.status(201).json({
        success : true,
        message : "User Created Successfully"
    })


    } catch (error) {
            return res.status(500).json({
            success : "false",
            message : "Server Error"
        })
    }
}

module.exports = {postProducts}
