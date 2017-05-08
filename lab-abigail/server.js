'use strict';

const express = require('express');
const app = module.exports = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
