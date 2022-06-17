const express = require('express');
const app = express();
const connection = require('./storage/db');
const authRoute = require('./routes/auth')
const cartRouter = require("./routes/cart")
const productRouter = require("./routes/product");
const cors = require("cors");
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    //origin: ['http://localhost:3000']
}))
//<---------------------------------------------------------------->


//Product page
app.use("/products", productRouter);
//<---------------------------------------------------------------->
//Authentication page
app.use("/auth",authRoute)
//<---------------------------------------------------------------->
//Cart page
app.use("/cart",cartRouter);
//<---------------------------------------------------------------->
const PORT = process.env.PORT || 8080
app.listen(PORT, async () => {
    await connection
    console.log("connected to db")
    console.log("Server listening at : http://localhost:8080");
})