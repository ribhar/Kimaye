const mongoose = require("mongoose")
const product = require("../models/productM")
// const productsdata = require("./productdata.js")
const connection = mongoose.connect("mongodb+srv://kimayeClone2022:XOBvv9RKjbaIupfO@cluster0.bhsaorg.mongodb.net/kimaye?retryWrites=true&w=majority")

// async function main(){
// const conn = await connection;
// console.log("connected to db")
// productsdata.map(async (el)=>{
//     const data = new product(el)
//     await data.save();
// })

// conn.disconnect()
// }
// main()
module.exports = connection;