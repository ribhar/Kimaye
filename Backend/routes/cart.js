const { Router } = require("express");
const cart = require("../models/cartM");

const cartRouter = Router();

cartRouter.get("/get", async (req, res) => {
  let cartdata = await cart.find();
  res.status(201).send(cartdata);
});

cartRouter.post("/post", (req, res) => {
  let cartitem = new cart(req.body);
  console.log(req.body);
  cartitem.save((err, success) => {
    if (err) {
      return res.status(400).send({ message: "Failed to add" });
    } else {
      return res
        .status(201)
        .send({ message: "item added", cartitem: success["_doc"] });
    }
  });
});

cartRouter.delete("/delete/:id", async (req,res)=>{
  let {id} = req.params;
  await cart.findByIdAndDelete(id)
  res.send({message:"item deleted"})
})

cartRouter.patch("/patch/qty", async (req, res) => {
  const { count } = req.body;
  const { id } = req.query;
  let inc = await cart.findByIdAndUpdate(id, { $inc: { qty: count } });
  res.send(inc);
});


module.exports = cartRouter;
