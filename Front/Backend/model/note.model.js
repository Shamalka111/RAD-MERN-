const mongoose = require('mongoose');
const Schema =mongoose.Schema;

let noteSchema = new Schema({

    title: {
        type: String
    },
    description: {
        type: String
    }
},{
    collation: 'noteschemas'
}
);

module.exports = mongoose.model('NoteSchema', noteSchema)