// cd C:\git\cse341\w01Team\cse341-project
// node prove01.js
// localhost:3000/users

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
});

server.listen(3000);
