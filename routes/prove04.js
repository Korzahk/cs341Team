/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   prove04.js
*******************************************************************************/
const express = require('express');
const router = express.Router();
const fs = require('fs');
// const product = require('../models/product');
let parsedData;
router.get('/',(req, res, next) => {
    res.render('pages/prove04', { 
        title: 'prove04', 
        path: '/prove04', // For pug, EJS 
    });
});

module.exports = router;