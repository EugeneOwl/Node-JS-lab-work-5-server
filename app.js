import express from 'express'
import bodyParser from 'body-parser'
import { connectToDatabase } from './database/connection'
import { ROOT_URL } from "./routes/routes"
import { corsSettings } from "./services/security/server-cors";
import { schema } from "./graphql/schema";
import { rootValue } from "./graphql/root-value";
import { formatError } from "./graphql/format-error";

const graphqlHTTP = require('express-graphql');

const cookieParser = require('cookie-parser');

const app = express();

connectToDatabase();
app.use(cookieParser());
app.use(corsSettings);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(ROOT_URL, graphqlHTTP({ schema, rootValue, graphiql: true, formatError }));

app.listen(8000, () => console.log('Listening on port 8000'));
