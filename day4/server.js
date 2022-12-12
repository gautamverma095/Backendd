const express = require("express")

const app = express()

app.use(express.json())

const fs = require("fs")

const port = process.env.PORT || 3000




app.get("/", (req, res) => {
    
    return res.send("Home Page")

})


app.post("/", (req, res) => {
    const file = fs.readFileSync("./db.json", "utf-8")
    const parsedFile = JSON.parse(file)
    
    parsedFile.todo.push(req.body)

    fs.writeFileSync("./db.json", JSON.stringify(parsedFile), "utf-8")
    // console.log(ans.todo);

    res.send("todo added")

    
})


app.put("/:id", (req, res) => {

    const id = req.params
    const answer = req.body

    const file = fs.readFileSync("./db.json", "utf-8")
    const parsedFile = JSON.parse(file)

    const newData = parsedFile.todo.map((el) => {
        if (el.id == id.id)
        {
            return answer
            
        }
        else {
            
            return el
        }
    })

    parsedFile.todo = newData
    
    // console.log(parsedFile.todo);

    fs.writeFileSync("./db.json", JSON.stringify(parsedFile), "utf-8")
    
    

    res.send("todo updated")


})


app.delete("/:id", (req, res) => {

    const id = req.params
    const answer = req.body

    const file = fs.readFileSync("./db.json", "utf-8")
    const parsedFile = JSON.parse(file)

    const newData = parsedFile.todo.filter((el) => {
        if (el.id != id.id)
        {
            console.log(el);
            return el
            }
    })

    parsedFile.todo = newData

    // console.log(parsedFile.todo);

    fs.writeFileSync("./db.json", JSON.stringify(parsedFile), "utf-8")



    res.send("todo deleted")


})


app.listen(port, () => {
    console.log(`listening to ${port}`);
})


