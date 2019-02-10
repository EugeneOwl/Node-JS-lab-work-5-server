import express from 'express'
import bodyParser from 'body-parser'
import {baseRouter} from "./routes/base-router"
import {connectToDatabase} from './database/connection'
import {BASE_URL} from "./routes/routes"

const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

connectToDatabase();
app.use(require('cors')({
    origin: function (origin, callback) {
        callback(null, origin);
    },
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(BASE_URL, baseRouter);

app.listen(8000, function () {
    console.log('Listening on port 8000');
});
