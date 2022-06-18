const { Router } = require("express");
const product = require("../models/productM");

const productRouter = Router();

productRouter.get("/get", async (req, res) => {
  let productitems = await product.find();
  res.status(201).send(productitems);
});

productRouter.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  let item = await product.findById(id);
  res.send(item);
});

productRouter.get("/get/category/:category", async (req, res) => {
  const category = req.params;
  let item = await product.find(category);
  res.send(item);
});

productRouter.patch("/patch/qty", async (req, res) => {
  const { count } = req.body;
  const { id } = req.query;
  let inc = await product.findByIdAndUpdate(id, { $inc: { qty: count } });
  res.send(inc);
});

module.exports = productRouter;
