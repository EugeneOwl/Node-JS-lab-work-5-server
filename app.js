import express from 'express'
import bodyParser from 'body-parser'
import {baseRouter} from "./routes/base-router"
import {connectToDatabase} from './database/connection'
import {BASE_URL} from "./routes/routes"
import {corsSettings} from "./services/security/server-cors";

const cookieParser = require('cookie-parser');

const app = express();

connectToDatabase();
app.use(cookieParser());
app.use(corsSettings);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(BASE_URL, baseRouter);

app.listen(8000, function () {
    console.log('Listening on port 8000');
});
