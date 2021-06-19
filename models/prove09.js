/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   models/prove09.js
*******************************************************************************/
// cd C:\git\cse341\w01Team\cse341-project
// npm run start
const fetch = require('node-fetch');
exports.getPokemon = (offset, callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            callback(data.results);
        });
}