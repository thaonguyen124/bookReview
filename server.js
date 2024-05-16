const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const route = require('./src/routes/index.js')
const db = require('./Models/connectDB')
const bodyParser = require('body-parser')


//Connect to database
db.connect();

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

