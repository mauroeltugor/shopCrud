const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    nameProduct: {
        type: String, 
        required: true
    },
    priceProduct: {
        type: Number, 
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema)