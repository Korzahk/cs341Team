/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   prove02-routes.js
*******************************************************************************/
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove02Routes', {
        title: 'prove02Routes',
        path: '/prove02Routes',
    });
});

module.exports = router;
