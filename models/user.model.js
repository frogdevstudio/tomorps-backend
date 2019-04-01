const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let UserSchema = new Schema({
    address: {type: String, required: true, unique: true},
    email: {type: String, required: true},
});
UserSchema.plugin(uniqueValidator);

// Export the model
module.exports = mongoose.model('User', UserSchema);