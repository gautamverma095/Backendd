const express = require("express")

const app = express()

const { Todo, connection } = require("./db")

app.use(express.json())

app.get("/todos", async (req, res) => {

    let todos = await Todo.find()
    res.send(todos)


})

app.post("/todos/create", async (req, res) => {

    const todo = req.body

    const todoData = new Todo(todo)

    await todoData.save()

    res.send("todo created")



})



app.put("/todos/:todoId", async (req, res) => {
    const { todoId } = req.params
    
    const todo = await Todo.updateOne({ id: todoId }, { $set: { ...req.body } })
    res.send(todo)


})
app.delete("/todos/:todoId", async (req, res) => {
    const { todoId } = req.params;
    const todo = await todoModel.deleteOne({ id: todoId });
    return res.send(todo);

})



app.listen(3000, async () => {

    try {
        await connection
        console.log("connected to db");

    } catch (error) {
        console.log("not connected to db");
        console.log(error);

    }
    console.log("listening to port 3000");
})