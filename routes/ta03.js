//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/',(req, res, next) => {
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
    });
    let rawData = fs.readFileSync('items.json');
    let parsedData = JSON.parse(rawData);
    console.log(parsedData);
});

module.exports = router;