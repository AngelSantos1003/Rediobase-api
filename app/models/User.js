const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    User_Name: { type: String, unique: true },
    User_Email: { type: String },
    User_Pass: { type: String },
    User_Phone: { type: String },
    User_Login_Fail: { type: Number },
    User_Number_Intents: { type: Number },
    User_Status: { type: Number },
    User_Created: { type: Date },
    User_Updated: { type: Date },
    User_Deleted: { type: Date },
    Token: { type: String },
    id_Role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    Client_Email: { type: String },
    Client_Phone: { type: String },
    Client_Ext: { type: String },
    Customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
});
module.exports = mongoose.model('User', User);
