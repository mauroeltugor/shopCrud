const express = require('express');
const productSchema = require('../models/product')

const router = express.Router();

//create product
router.post('/products', (req, res) => {
    const user = productSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all products
router.get('/products', (req, res) => {
    productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get just one product 
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update product 
router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, priceProduct, desc } = req.body;
    productSchema
    .updateOne({ _id: id}, { $set: {nameProduct, priceProduct, desc} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete product 
router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    productSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;