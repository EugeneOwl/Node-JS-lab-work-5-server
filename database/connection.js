import mongoose from 'mongoose'

const databaseName = 'test4eugene';

const connectToDatabase = () => {
    mongoose.connect(`mongodb://127.0.0.1/${databaseName}`);

    mongoose.connection.once('open', function () {
        console.log('Connected to database.');
    }).on('error', function (error) {
        console.log('Database connection error: ', error);
    });
};

export {connectToDatabase}