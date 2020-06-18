const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

function doMath(req, res) {
    if (req.body.op = "Add") {
        console.log(a + b)
    }
    else if (req.body.op = "Subtract") {
        console.log(a - b)
    }
    else if (req.body.op = "Multiply") {
        console.log(a * b)
    }
    else if (req.body.op = "Divide") {
        console.log(a / b)
    }
}

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/math', (req, res) => doMath(req, res))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
