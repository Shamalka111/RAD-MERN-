const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const CourseSchema = new Schema({
    courseName : {
        type : String,
        required:true
    },
    noOfCredits : {
        type : Number,
        required: true
    },
    duration : {
        type : Number
    },
    conductedBy : {
        type : String
    },
},{
    collection: 'courses'
}) 


module.exports = mongoose.model('courses',CourseSchema);


