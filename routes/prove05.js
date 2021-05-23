/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   prove05.js
*******************************************************************************/
const express = require('express');
const router = express.Router();
const fs = require('fs');
// const product = require('../models/product');
let parsedData;

router.post('/logged-in', (req, res, next) => {
    res.render('pages/prove05LoggedIn', { 
        title: 'prove05', 
        path: '/prove05', // For pug, EJS 
    });
});
router.get('/',(req, res, next) => {
    res.render('pages/prove05', { 
        title: 'prove05', 
        path: '/prove05', // For pug, EJS 
    });
});

module.exports = router;