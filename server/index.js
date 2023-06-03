require('dotenv').config()
const express = require('express')
const cors = require('cors') 

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

start()