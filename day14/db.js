

const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const connection = mongoose.connect("mongodb://127.0.0.1:27017/web30")


const TodoSchema = new mongoose.Schema({
    id: Number,
    task: String

})


const Todo = mongoose.model("todo", TodoSchema)



module.exports = {
    Todo,
    connection
}