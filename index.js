/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   index.js
*******************************************************************************/
// cd C:\git\cse341\w01Team\cse341-project
// npm run start
// Our initial setup (package requires, port number setup)
const PORT = process.env.PORT || 5000 // heroku || localhost:5000
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database').mongoConnect;

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03'); 
const ta04Routes = require('./routes/ta04'); 

const prove04 = require('./routes/prove04');

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use(bodyParser({extended: false})) // For parsing the body of a POST
   .use('/ta01', ta01Routes)
   .use('/ta02', ta02Routes) 
   .use('/ta03', ta03Routes) 
   .use('/ta04', ta04Routes)
   .use('/prove04', prove04)
   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  (() => {
  app.listen(3000);
});