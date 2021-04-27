/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   prove01.js
*******************************************************************************/
// cd C:\git\cse341\w01Team\cse341-project
// npm run prove01

const http = require('http');
const pageNav  = require("C:\\git\\cse341\\w01Team\\cse341-project\\routes\\prove01-routes.js");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
      pageNav.forwardSlash(res)
    }
    if (url === '/users') {
      pageNav.users(res);
    }
    if (url === '/create-user') {
      pageNav.createUser(req, res);
    }
});

server.listen(3000);