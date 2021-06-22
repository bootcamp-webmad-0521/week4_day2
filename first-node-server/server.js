const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {

    console.log(`Someone has requested ${req.url}`)

    if (req.url === '/') {
        res.write(`<h1>¡Hola, ironhackers! Esto es el inicio</h1><p>Soy vuestro primer servidor</p>`)
    } else if (req.url === '/nosotros') {
        res.write(`<h1>¡Hola, ironhackers! Esto es NOSOTROS</h1><p>Soy vuestro primer servidor</p>`)
    } else if (req.url === '/contacto') {
        res.write(`<h1>¡Hola, ironhackers! Esto es CONTACTO</h1><p>Soy vuestro primer servidor</p>`)
    } else {
        res.statusCode = 404
        res.write('<h1 style="color: red;">ESTO ES UN 404, MERLUZO</h1>')
    }

    res.end()
})

server.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`))