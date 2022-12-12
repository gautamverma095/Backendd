const morgan = require('morgan')
const express = require('express')
const fs = require("fs")

const app = express()
const port = process.env.PORT || 3000   

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });


// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', function (req, res) {
    res.send('hello, world!')
});

app.listen(port, () => {
    console.log(`listening to ${port}`);
})