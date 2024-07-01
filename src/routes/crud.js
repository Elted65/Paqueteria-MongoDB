import { Router } from "express";
import bodyParser from "body-parser";
import User from "../schemas/collectionSchema.js";


const crud = Router();

crud.use(bodyParser.urlencoded({ extended: false }));

crud.post('/layout/data', async (req, res) => {

    let { name, phone, email, password, address } = req.body;

    const newUser = new User({
        name,
        phone,
        address,
        email,
        password
    });

    let userTemp = await newUser.save();

    console.log(userTemp);

    res.redirect('/');

});

crud.put('/layout/data/update', async (req, res) => {

    let { name, phone, email, password, address, id } = req.body;

    let query = { _id: id };

    
    if(name != '') User.findOneAndUpdate(query, { $set: { name: name } });

    if(phone != '') User.findOneAndUpdate(query, { $set: { phone: phone } });

    if(email != '') User.findOneAndUpdate(query, { $set: { email: email } });

    if(password != '') User.findOneAndUpdate(query, { $set: { password: password } });

    if(address != '') User.findOneAndUpdate(query, { $set: { address: address } });

    res.redirect('/update');

});

crud.delete('/layout/data/delete', async (req, res) => {

    let query = { _id: id };

    User.deleteOne(query)

    res.redirect('/update');

});

export default crud;