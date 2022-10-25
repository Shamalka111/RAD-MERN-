const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let teacherschema = new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    age:{
        type:Number
    },
    address:{
        type:String
    },
},{
    collection: 'teachers'
});

module.exports =mongoose.model('teacherschema',teacherschema)