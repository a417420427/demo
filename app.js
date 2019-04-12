var express = require('express')
var app = express()
var path = require('path')

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.use('/static',express.static(path.resolve(__dirname, 'dist/static')))


app.listen(4000)