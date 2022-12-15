const router = require('express').Router();
const path = require('path');
const apiRoute = require('./api/api.routes');

// Routes
router.use('/api', apiRoute)


// Generals routes

router.all('/*', (req, res)=>{
    const filePath = path.join(__dirname, './../pages/404.html');
    res.status(404).sendFile(filePath)
})

module.exports = router;