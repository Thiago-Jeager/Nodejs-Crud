//import pool from "../pool.js";
const pool = require("../db.js");

const getProduct = async (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM products WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const getProducts = async (req, res) => {
    pool.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const createProduct = async (req, res) => {
    const { code, description, price, quantity} = req.body;
    pool.query('INSERT INTO products (code, description, price, quantity) VALUES (?, ?, ?, ?)', 
    [code, description, price, quantity], 
    (err, result) => { 
        if (err) { 
            console.log(err); 
        } else { 
            res.send('Values Inserted'); 
        } 
    });
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM products WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const updateProduct = async (req, res) => {
    const { id,code, description, price, quantity } = req.body;
    pool.query('UPDATE products SET code = ?, description = ?, price = ?, quantity = ? WHERE id = ?', [code, description, price, quantity, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};
// Exportar las funciones
module.exports = {
    getProduct,
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
  };