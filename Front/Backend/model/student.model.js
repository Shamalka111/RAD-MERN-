const mongoose = require('mongoose');
const Schema =mongoose.Schema;

let studentSchema = new Schema({

    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        type: String
    },
},
{
    collection: 'students'
}
);

module.exports = mongoose.model('StudentSchema', studentSchema)