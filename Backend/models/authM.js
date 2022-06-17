const { Schema, model } = require('mongoose')
const authSchema = new Schema({
    FirstName: { type: String},
    LastName: { type: String},
    Email: { type: String},
    Password: { type: String }
})

const authM = model("auth", authSchema)
module.exports = authM