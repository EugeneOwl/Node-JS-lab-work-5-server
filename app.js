import express from 'express'
import bodyParser from 'body-parser'
import {taskRouter} from "./routes/task-router"
import {connectToDatabase} from './database/connection'
import {BASE_URL} from "./routes/routes"

const fileUpload = require('express-fileupload');

const app = express();

connectToDatabase();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // TODO check up if delete
app.use(fileUpload());
app.use(BASE_URL, taskRouter);

app.listen(8000, function () {
    console.log('Listening on port 8000');
});
