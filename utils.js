const nodemailer = require('nodemailer');

module.exports = {
    sendEmail(mailOptions) {
        let transporter = nodemailer.createTransport({
            service : 'Gmail',
            auth : {
                user : 'tomorps.online@gmail.com',
                pass : 'Llcl1992'
            }
        });
       
        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.log(error);
            } else {
                console.log('Message sent' + info.response);
            }
        });
    },
}