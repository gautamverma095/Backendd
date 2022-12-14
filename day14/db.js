

const mongoose = require("mongoose")
mongoose.set('strictQuery', true);


const connection = mongoose.connect("mongodb+srv://123vermaji:123vermaji@cluster0.cfhdsvk.mongodb.net/web30")


const TodoSchema = new mongoose.Schema({
    id: Number,
    task: String

})


const Todo = mongoose.model("todo", TodoSchema)



module.exports = {
    Todo,
    connection
}