/*******************************************************************************
*   CSE 341-02 Web Backend Development II
*   Spencer Eccles
*   prove02.js
*******************************************************************************/
// cd C:\git\cse341\w01Team\cse341-project
// npm run prove02

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000

const app = express();

// Route setup
const prove02Routes = require('./routes/prove02Routes');

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')

   .use(bodyParser({extended: false})) // For parsing the body of a POST
   .use('/prove02Routes', prove02Routes) 
   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/prove02', {title: 'prove02', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));
