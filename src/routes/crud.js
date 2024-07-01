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
    
    if(name != '') await User.findOneAndUpdate(query, { $set: { name: name } });

    if(phone != '') await User.findOneAndUpdate(query, { $set: { phone: phone } });

    if(email != '') await User.findOneAndUpdate(query, { $set: { email: email } });

    if(password != '') await User.findOneAndUpdate(query, { $set: { password: password } });

    if(address != '') await User.findOneAndUpdate(query, { $set: { address: address } });

    res.redirect('/update');

});

crud.post('/layout/data/delete', async (req, res) => {

    let id = req.body.id;

    console.log(id);

    let query = { _id: id };

    await User.deleteOne(query)

    res.redirect('/');

});

export default crud;