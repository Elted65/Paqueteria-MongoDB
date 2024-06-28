import { Router } from "express";

const route = Router();

route.get('/layout', (req, res) => res.render('layout'));

export default route;