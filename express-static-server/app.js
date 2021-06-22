const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(`Este es el path absoluto de este archivo: ${__dirname}`)
    res.sendFile(`${__dirname}/views/index-page.html`)
})

app.get('/contacto', (req, res) => {
    res.sendFile(`${__dirname}/views/contact-page.html`)
})

app.get('/popino-el-perro', (req, res) => {
    res.sendFile(`${__dirname}/views/popino-page.html`)
})


app.listen(3000, () => console.log('Express server listening on port 3000'))