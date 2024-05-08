const { model } = require('mongoose');
const UserSchema = require('../schemas/userSchema');

const UserModel = model('User', UserSchema);

module.exports = UserModel;