const apiRouter = require('express').Router()

const emailRouter = require('./mail.service.routes');

apiRouter.use('/email', emailRouter)

apiRouter.get('/', (req, res)=>{
    res.json({
        ok: true,
        message: "Bienvenu sur l'api"
    })
})


module.exports = apiRouter