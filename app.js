const express = require('express')
const app = express()
const cors = require('cors')

// Read environnement file
require('dotenv').config()

// Basics middelwears
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// Serve files from the public directory
app.use(express.static('public'))

// Routing
const router = require('./routes/index.routes')
app.use(router)


// Running the app

app.listen(process.env.SERVER_PORT, ()=>{
    console.log('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬');
    console.info(`✨ Server started at port http://${process.env.DOMAIN_NAME}:${process.env.SERVER_PORT}`)
    console.log('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬');
})