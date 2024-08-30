const nodemailer = require('nodemailer')
require('dotenv').config()

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:email,
        pass
    }
})

const mailOptions ={
    from:email
}


module.exports={
    transporter,
    mailOptions
}