const { Schema, model } = require('mongoose')
const authSchema = new Schema({
    
})

const authM = model("auth", authSchema)
module.exports = authM