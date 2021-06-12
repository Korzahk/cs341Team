/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   routes/prove08.js
*******************************************************************************/
// cd C:\git\cse341\w01Team\cse341-project
// npm run start
const express = require('express');
const router = express.Router();
const controller = require('../controllers/prove08Controller.js');
router.get('/', controller.processJson)
      .post('/', controller.getIndex)
module.exports = router;