import { Router } from "express";
import bodyParser from "body-parser";
import User from "../schemas/collectionSchema.js";

const create = Router();

create.use(bodyParser.urlencoded({ extended: false }));

create.post('/layout/data', async (req, res) => {

    const { name, phone, email, password, address } = req.body;

    const newUser = new User({
        name,
        phone,
        address,
        email,
        password
    });

    const userTemp = await newUser.save();

    console.log(userTemp);

    res.redirect('/');

});

export default create;