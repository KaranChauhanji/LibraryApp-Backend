const mongoose  = require('mongoose');

const reviewSchema = mongoose.Schema({
    feedback:{type:String, require:true},
    rating:{type:Number, enum:[1,2,3,4,5], default:3}
});

const ReviewModel = mongoose.model('review', reviewSchema);

module.exports = ReviewModel;