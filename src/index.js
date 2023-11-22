const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/product.js')

const app = express();
const port = process.env.PORT || 9000;  

//middleware
app.use(express.json());
app.use('/api', productRoutes);

//routes
app.get('/', (req, res) =>{
    res.send('Welcome to my API');
})

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to mongodb atlas'))
.catch((error) => console.error(error));

const server = app.listen(port, () => console.log('server listening on port', port))

module.exports = { app, server };  