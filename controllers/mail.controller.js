const Email = require('nodemailer')

const mailOptions = {
    from: "",
    to: process.env.EMAIL_ADRESSE,
    subject: "[witchtattoo.fr] - Message de contact",
    html: "<h1>Le message ne contient aucun contenu !</h1>"
} 

const transporter = Email.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_ADRESSE,
        pass: process.env.EMAIL_SERVICE_AUTH
    }
})

exports.sendEmail = async (req, res)=>{
    try{
        const email = req.body.email.toLowerCase()
        const message_content = req.body.message
        const name = req.body.name

        mailOptions.from = email
        mailOptions.html = `<h1>Message de ${name}</h1><h3>Merci de me répondre à :<br><a href="mailto:${email}"><button style="margin: 0;padding: 10px 30px; border-radius: 10px; background-color: #8ec9ff; border: none; cursor: pointer;">${email}</button></a></h3><p><strong>Voici le contenu du message:</strong></p><pre style="font-family: Arial">${message_content}</pre>`

        transporter.sendMail(mailOptions, (err, info)=> {
            if(err){
                return res.status(400).json({ok: false, message: err.message})
            }
            return res.send(info.response)
        })
    }catch(err){
        res.status(400).json({ok: false, message: err.message})
    }
}