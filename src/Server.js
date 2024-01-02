const express = require('express');
const port = process.env.PORT || 5000;
require('dotenv').config();
const app = express();
const route = require('../routes/Router');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(route);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})