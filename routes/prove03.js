/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   prove03.js
*******************************************************************************/
const express = require('express');
const router = express.Router();
const fs = require('fs');
let parsedData;
router.get('/',(req, res, next) => {
    res.render('pages/prove03', { 
        title: 'prove03', 
        path: '/prove03', // For pug, EJS 
    });
    let rawData = fs.readFileSync('items.json');
    parsedData = JSON.parse(rawData);
    console.log(parsedData);
});

module.exports = router;