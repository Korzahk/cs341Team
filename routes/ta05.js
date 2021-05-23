//TA05 PLACEHOLDER
const express = require('express');
const router = express.Router();
let style;
let counter;
router.get('/',(req, res, next) => {
    res.render('pages/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
    app.use
    

});

module.exports = router;