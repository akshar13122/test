const purchseModel = require('../Model/purchaseModel');
const productModel = require('../Model/productModel')

const purchaseProduct = async(req , res) => {
    try {
        const {userid} = req.params;
        const {productId , productQty  } =  req.body;

        if(!userid || !productId || !productQty){
            return res.status(404).json({
                succeess : false,
                message : "All feilds are require"
            })
        }
        
        const product = await productModel.findByPk(productId)

        const totalBill = product.productprice * productQty;
        const productName = product.productname;
        const productWeight = product.productWeight;

        const purchase = await purchseModel.create({
            userid : userid,
            productName : productName,
            productId : productId,
            productQty : productQty ,
            productWeight : productWeight ,
            totalBill : totalBill
        })
        return res.status(200).json({
            success: true,
            message: "Product purchased successfully",
            data : purchase
        })

    } catch (error) {
        res.status(500).json({
            succeess : false,
            message : error.message
        })
    }
}

module.exports = {purchaseProduct}