const { Schema, model } = require('mongoose')
const productSchema = new Schema({

})

const productM = model("product", productSchema)
module.exports = productM