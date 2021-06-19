/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   routes/prove09.js
*******************************************************************************/
// cd C:\git\cse341\w01Team\cse341-project
// npm run start
const express = require('express');
const router = express.Router();
const controller = require('../controllers/prove09.js');
router.get('/', (req, res, next) => {
      const page = req.params.page;
      controller.getPokemon(page, (prove09) => {
              res.render('pages/prove09.ejs', {
                  pokemonList: prove09,
                  page: page
              });
      });
  });
  module.exports = router;