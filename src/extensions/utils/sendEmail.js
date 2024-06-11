const nodemailer = require('nodemailer');

const sendEmail = async (subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: strapi.config.get('email.mailer-host'),
            port: strapi.config.get('email.mailer-port'),
            secure: true,
            auth: {
                user: strapi.config.get('email.mailer-user'),
                pass: strapi.config.get('email.mailer-pass')
            }
        });       

        const mailOptions = {
            from: `"${strapi.config.get('email.mailer-display-name')}" <${strapi.config.get('email.mailer-user')}>`,
            to: strapi.config.get('email.mailer-to', ''),
            subject,
            text
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = { sendEmail };