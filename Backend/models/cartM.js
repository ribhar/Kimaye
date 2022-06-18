const {Schema, model} = require("mongoose")

const cartSchema = new Schema({
    Email: {type: String, required: true},
    title : String,
    imageUrl:String,
    qty : {type : Number, default:1, min:1},
    price : Number,
    category: String,
})

const cart = model("cart",cartSchema)

module.exports = cart;