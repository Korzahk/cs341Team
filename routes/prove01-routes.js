/*******************************************************************************
*   prove01-routes.js
*******************************************************************************/
var newUser = false; // used in functions createUser and users

function forwardSlash(res) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>prove01</title></head>\
      <body>Greetings!<br><br>username:\
      <form action="/create-user" method="POST">\
      <input type="text" name="username">\
      <button type="submit">Send</button></form></body></html>'
    );
    res.end();
}

function users(res) {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>prove01</title></head>\
    <body><ul><li>Zezima</li><li>Phatwrecked</li>');
  if(newUser) { // adds new user to list of users
    res.write('<li>' + String(newUser) + '</li>');
  }
  res.write('</ul></body></html>');
  res.end();
}

function createUser(req, res) {
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    newUser = parsedBody.split('=')[1];
    console.log('new user: ' + newUser);
  });
  res.statusCode = 302;
  res.setHeader('Location', '/users');
  res.end();
}

module.exports = {forwardSlash, users, createUser};