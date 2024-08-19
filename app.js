const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const host = 'localhost';
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // jika mengirimkan data dalam bentuk form

// route
app.use('/api', require('./routes/index.routes'));


// listener
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});