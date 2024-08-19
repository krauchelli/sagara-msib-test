const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const host = 'localhost';
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // jika mengirimkan data dalam bentuk form

// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/clothes', require('./routes/clothes.routes'));


// listener
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});