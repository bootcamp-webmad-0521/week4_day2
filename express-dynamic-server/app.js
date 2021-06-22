const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    let student = { name: 'Pablo' }
    res.render('index-page', student)
})


app.get('/detalles', (req, res) => {

    let student = {
        name: 'Pablo',
        course: 'Web Development <em>Full Time</em>',
        campus: 'Madrid',
        confirmed: true,
        pending: true,
        bankAccount: undefined,
        debt: 2000,
        address: {
            street: 'Chopera',
            number: 14,
            code: 28002,
            city: 'Madrid',
            country: 'Spain'
        },
        topics: ['HTML', 'CSS', 'EXPRESS', 'REACT', 'NODE', 'MONGODB']
    }

    res.render('details-page', student)
})



app.listen(3000, () => console.log('Express server listening on port 3000'))