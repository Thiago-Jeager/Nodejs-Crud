//import { Router } from "express";
// const router = Router();
const router = require('express').Router();
const productsControllers = require("../controllers/products_controller.js");

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = productsControllers;


router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/products", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

//export default router;
module.exports = router;