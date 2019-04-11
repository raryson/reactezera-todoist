const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

let id = 0

const app = express()

app.use(bodyParser.json())
app.use(cors())

const database = { ists: []}

app.get('/ists', (req, res) => {
    res.json(database.ists)
})

app.post('/ists', (req, res) => {
    const createdIstId = createIst(req.body.ist)
    res.status(200)
    res.json(findIstById(createdIstId))
})

app.delete('/ists', (req, res) => {
    res.status(200)
    res.json(deleteIst(req.query.id))
})

app.listen(4000, () => {
    console.log('app running on 4000')
})

const deleteIst = (id) => {
    const searchedIstIndex = findIstIndexById(id)
    database.ists.splice(searchedIstIndex, 1)
    return id
}

const findIstById = (id) => {
    return database.ists.find((ist) => {
        if (ist.id == id ) return ist
        
    })
}

const findIstIndexById = (id) => {
    let findedIstId = null
    database.ists.forEach((ist, index) => {
        if (ist.id == id ) findedIstId = index
    })

    return findedIstId
}

const createIst = (ist) => {
    database.ists.push({id, message: ist})
    id++
    return id-1
}