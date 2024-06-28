import { Schema, model } from "mongoose";

const User = new Schema({

    name: String,
    phone: String,
    address: String,
    email: String,
    password: String
    
});

export default model('User', User);