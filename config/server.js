const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./app/static'));

module.exports = app;