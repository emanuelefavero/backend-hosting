const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())

// get data from json file
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'))

app.get('/', (req, res) => {
    res.json(data)
})

data.forEach((item) => {
    // create a route for each item (using each name or each name in lowercase)
    // e.g. /john /jack, /John, /Jack
    app.get(`/${item.name}`, (req, res) => {
        res.json(item)
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
