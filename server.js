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
    const createdUserId = createUser(req.body.name, req.body.age)
    res.status(200)
    res.json(findUserById(createdUserId))
})

app.delete('/users', (req, res) => {
    res.status(200)
    res.json(deleteUser(req.query.id))
})

app.listen(4000, () => {
    console.log('app running on 4000')
})

const deleteUser = (id) => {
    const searchedUserIndex = findUserIndexById(id)
    database.users.splice(searchedUserIndex, 1)
    return id
}

const findUserById = (id) => {
    return database.users.find((user) => {
        if (user.id == id ) return user
        
    })
}

const findUserIndexById = (id) => {
    let findedUserId = null
    database.users.forEach((user, index) => {
        if (user.id == id ) findedUserId = index
    })

    return findedUserId
}

const createUser = (name, age) => {
    database.users.push({id, name, age})
    id++
    return id-1
}