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
        
        res.send('User created successfully!')
    })
};

