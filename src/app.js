//import express from "express";
//import productsRouter from "./routes/products.routes.js";
//import cors from "cors";

const productsRouter = require("./routes/products_routes.js");

//Usar Express
const express = require('express');
//Cors
const cors = require('cors');

const app = express();
// Habilitar CORS
app.use(cors());
app.use(express.json());
app.use("/api", productsRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Page not found",
  });
});

//export default app;

module.exports = app;
