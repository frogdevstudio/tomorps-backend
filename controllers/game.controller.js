const utils = require('../utils');
const User = require('../models/user.model');

exports.join = (req, res, next) => {
    User.findOne({address: req.body.addressHost}, (err, user) => {
        if (err) 
            return next(err);

        let mailOptions = {
            from : 'TomoRPS <tomorps.online@gmail.com',
            to : user.email,
            subject : 'Notification: You have a game need to reveal!',
            text : 'Game #' + req.body.gameId + ' was finished! Please go to reveal result! Thank you!',
        };
            
        utils.sendEmail(mailOptions)
        res.send('Join game successfully!');
    });
};