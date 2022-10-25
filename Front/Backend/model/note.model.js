const mongoose = require('mongoose');

const Schema = mongoose.Schema

//create a schema
const noteSchema = new Schema({
    title : {
         type : String,
         required : true
    },
    description : {
         type : String,
         required : true
    },

    category : {
         type : String,
         required : true
    }
},
{timestamps:true},
{
    collection: 'notes'
}

);
//create  a model
module.exports = mongoose.model('notes',noteSchema);