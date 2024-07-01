import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import route from "./routes/routes.js";
import crud from "./routes/crud.js";

const app = express();
const port = 3000;

import "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(route);
app.use(crud);

app.listen(port, (req, res) => {
    console.log('LISTEN ON PORT', port);
});