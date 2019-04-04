const utils = require('../utils');
const User = require('../models/user.model');

exports.user_create = (req, res, next) => {
    let user = new User(
    {
            address: req.body.address,
            email: req.body.email
        }
    );

    user.save((error) => {
        if (error) {
            return next(error);
        }

        let mailOptions = {
            from : 'TomoRPS <tomorps.online@gmail.com',
            to : user.email,
            subject : 'Welcome to play TomoRPS! ',
            text : "Great! You subscribe TomoRPS successfully! You will receive a notification email when a game finished! Let's play TomoRPS now! Good luck!"
        };
        utils.sendEmail(mailOptions);
        res.send('User created successfully!');
    });
};