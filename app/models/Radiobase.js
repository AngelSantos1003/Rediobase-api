const mongoose = require('mongoose');

const { Schema } = mongoose;
const Radiobase = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    RADIOBASE: { type: String},
    FECHA: { type: String },
    REGION: { type: String },
    TRAFICO: { type: Number },
});
module.exports = mongoose.model('Radiobase', Radiobase);