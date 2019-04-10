const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const database = { users: []}

app.get('/users', (req, res) => {
    res.json(database.users)
})

app.post('/users', (req, res) => {
    createUser(req.body.name, req.body.age)
    console.log(database)
    res.status(200).send()
})

app.listen(4000, () => {
    console.log('app running on 4000')
})

const createUser = (name, age) => {
    database.users.push({name, age})
}