const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/users', (req, res) => {
    res.json({name : 'Raryson', age: 21})
})

app.listen(4000, () => {
    console.log('app running on 4000')
})