const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/users', (req, res) => {
    const users = ["Alex", "Peter", "John"];
    res.json(users);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;