const express = require("express");
const cors = require("cors");
const cartRouter = require("./routes/cart")
const productRouter = require("./routes/product");
const connection = require("./storage/db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use("/products", productRouter);
app.use("/cart",cartRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("successfully connected to db");
  } catch (error) {
    console.log("Failed to connect");
  }
});
