import { Router } from "express";
import User from "../schemas/collectionSchema.js"

const route = Router();

route.get('/', async (req, res) => {

    const users = await User.find();

    res.render('home', { users })
});

route.get('/create', (req, res) => res.render('create'));

route.get('/update', (req, res) => res.render('update'));

route.get('/delete', (req, res) => res.render('delete'));

export default route;