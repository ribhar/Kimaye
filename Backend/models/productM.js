const {Schema, model} = require("mongoose")

const productSchema = new Schema({
    title : String,
    imageUrl:String,
    description : String,
    qty : {type : Number, default:1, min:1},
    price : Number,
    category : String,
    desimage : String,
})

const product = model("product",productSchema)

module.exports = product;