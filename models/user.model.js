const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    user_id:{type: String, required: true, max: 100},
    first_name:{type: String, required: true, max: 100},
    last_name:{type: String, required: true, max: 100},
    contact_number:{type: Number, required: false},
    mail_id:{type: String, required: false, max: 100},
    description:{type: String, required: false, max: 500},
    display_pic:{type: String, required: false, max: 100},

});


// Export the model
var Users = module.exports = mongoose.model('Users', UserSchema);
module.exports.getUsers = function(callback,limit){
    Users.find(callback).limit(limit);
}