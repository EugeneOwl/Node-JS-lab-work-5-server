import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    name: String,
    status: String
});

const Task = mongoose.model('task', taskSchema);

export {Task}