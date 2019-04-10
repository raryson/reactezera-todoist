const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

let id = 0

const app = express()

app.use(bodyParser.json())
app.use(cors())

const database = { users: []}

app.get('/users', (req, res) => {
    res.json(database.users)
})

app.post('/users', (req, res) => {
    createUser(req.body.name, req.body.age)
    res.status(200).send()
})

app.delete('/users', (req, res) => {
    deleteUser(req.body.id)
    res.status(200).send()
})

app.listen(4000, () => {
    console.log('app running on 4000')
})

const deleteUser = (id) => {
    const searchedUser = findUserById(id)
    database.users.splice(searchedUser, 1)
}

const findUserById = (id) => {
    database.users.filter((user) => {
        return user.id === id
    })
}

const createUser = (name, age) => {
    database.users.push({id, name, age})
    this.id++
}