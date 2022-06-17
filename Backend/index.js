const express = require('express');
const app = express();
const connection = require('./storage/db');
const productRoute = require('./routes/product')
const authRoute = require('./routes/auth')
const cartRoute = require('./routes/cart')
const cors = require("cors");
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    //origin: ['http://localhost:3000']
}))
//<---------------------------------------------------------------->
//Product page
app.use("/product",productRoute)
//<---------------------------------------------------------------->
//Authentication page
app.use("/auth",authRoute)
//<---------------------------------------------------------------->
//Cart page
app.use("/cart",cartRoute)
//<---------------------------------------------------------------->
const PORT = process.env.PORT || 8080
app.listen(PORT, async () => {
    await connection
    console.log("connected to db")
    console.log("Server listening at : http://localhost:8080");
})