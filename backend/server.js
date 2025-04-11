const express = require('express')
const cors = require('cors')
const server = express()


server.use(cors())

server.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    })
})

server.listen(3000, () => console.log('API is running on localhost3000'))

//module.exports = server