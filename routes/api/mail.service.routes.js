const mailRouter = require('express').Router()
const mailController = require('../../controllers/mail.controller')

mailRouter.route('/')
    .post(mailController.sendEmail)

module.exports = mailRouter