import express from 'express'
import bodyParser from 'body-parser'
import {taskRouter} from "./routes/task-router";
import {connectToDatabase} from './database/connection'

const app = express();

connectToDatabase();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/node', taskRouter);



app.listen(8000, function () {
    console.log('Listening on port 8000');
});
