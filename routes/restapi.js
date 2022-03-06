const express = require('express')
const Product=require('../mongoose_connection');
const router = new express.Router();

router.post("/product", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
});

router.get("/product", async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
});

router.get("/product/:id", async (req, res) => {
  const id=req.params.id;
  const product = await Product.findById(id);
  res.status(200).json({ success: true, product });
});

router.patch("/product/:id", async (req, res) => {
  const id=req.params.id;
  const product = await Product.findByIdAndUpdate(id,req.body,{new:true});
  res.status(200).json({ success: true, product });
});

router.delete("/product/:id", async (req, res) => {
  const id=req.params.id;
  const product = await Product.findByIdAndDelete(id);
  res.status(200).json({ success: true, product });
});

module.exports = router;