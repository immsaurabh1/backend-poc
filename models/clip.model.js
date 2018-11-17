const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClipSchema = new Schema({
    clip_id:{type: String, required: true, max: 100},
    uploaded_by:{type: String, required: true, max: 100},
    clip_path:{type: String, required: true, max: 100},
    clip_image:{type: String, required: true, max: 100},
    category_type:{type: String, required: false, max: 100},
    liked_by:{type: Array, required: false},
    disliked_by:{type: Array, required: false},
    comment_added: {type: Array, required: false},

});


// Export the model
var Clips = module.exports = mongoose.model('Clips', ClipSchema);
module.exports.getClips = function(callback,limit){
    Clips.find(callback).limit(limit);
}