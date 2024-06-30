const mongoose  = require('mongoose');


const bookSchema = mongoose.Schema({
    title:{type:String, require:true, unique:true},
    price:{type:Number, require:true},
    rating:{type:Number, default:3},
    userId:{type:String},
    author:{type:String},
    feedback:{String}
},{
    versionKey:false
});

const BookModel = mongoose.model('book',bookSchema);

module.exports = BookModel;