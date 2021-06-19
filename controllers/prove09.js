/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   controllers/prove09.js 
*******************************************************************************/
// cd C:\git\cse341\w01Team\cse341-project
// npm run start
const ITEMS_PER_PAGE = 10
const model = require('../models/prove09');
exports.getPokemon = (pageNum, callback) => {
    const offset = ITEMS_PER_PAGE * (pageNum - 1);
    model.getPokemon(offset, (data) => {
        callback(data);
    });
}