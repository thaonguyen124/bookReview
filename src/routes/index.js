const reviewRouter = require('./review.js');
const siteRouter = require('./site.js');
const express=require('express');
const path = require('path');

function route(app)
{
    /*
    app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => {
    var duongDanFile= path.join(__dirname, 'Review.html')
    res.sendFile(duongDanFile)
  })
  */
    app.use('/review/public', express.static(path.join(__dirname, '../public')))
    
    app.use('/review', reviewRouter )
    app.use('/',siteRouter)
}

module.exports = route;
