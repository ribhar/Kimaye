const { Schema, model } = require('mongoose')
const cartSchema = new Schema({

})

const cartM = model("cart", cartSchema)
module.exports = cartM