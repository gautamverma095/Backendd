const express = require("express")
const app = express()
const morgan = require("morgan")
const path = require("path");

app.use(express.json())
const fs = require("fs")
const accessLogStream = fs.createWriteStream(path.join(__dirname, "logs.txt"), {
    flags: "a",
});


app.use(morgan("combined", { stream: accessLogStream }));

const validator = (req, res, next) => {

    const { id, title, content } = req.body
    if (!id || !title || !content) {
        res.send("Validation Failed")
    }
    if (typeof (id) !== "number") {
        res.send("Validation Failed")
    }
    else if (typeof (title) !== "string") {
        res.send("Validation Failed")
    }
    else if (typeof (content) !== "string") {
        res.send("Validation Failed")
    }
    else {
        next()
    }

}

const guard = (req, res, next) => {
    const query = req.query
    console.log(query.password);
    if (query.password == 54123)
    {
        next()
    }
    else {
        res.send("You are not authorised to do this operation");
    }
    
}


app.get("/posts", (req, res) => {
    const file = fs.readFileSync("./posts.json", "utf-8")
    const parsedFile = JSON.parse(file)
    res.send(parsedFile)
    
})

app.post("/posts/create", validator, (req, res) => {

    const data = req.body

    const file = fs.readFileSync("./posts.json", "utf-8")

    const parsedFile = JSON.parse(file)

    parsedFile.posts.push(req.body)


    fs.writeFileSync("./posts.json", JSON.stringify(parsedFile), "utf-8")




    res.send("post created")

})

app.put("/posts/:postId", guard, (req, res) => {

    const data = req.body
    const id = req.params

    const file = fs.readFileSync("./posts.json", "utf-8")

    const parsedFile = JSON.parse(file)

    const newData = parsedFile.posts.map((el) => {
        if (el.id == id.postId) {
            return data
        }
        else {
            return el
        }
    })

    parsedFile.posts = newData
    
    
    fs.writeFileSync("./posts.json", JSON.stringify(parsedFile), "utf-8")




    res.send("post updated")

})
app.delete("/posts/:postId", guard, (req, res) => {

    const data = req.body
    const id = req.params

    const file = fs.readFileSync("./posts.json", "utf-8")

    const parsedFile = JSON.parse(file)

    const newData = parsedFile.posts.filter((el) => {
        return el.id != id.postId
    })

    parsedFile.posts = newData


    fs.writeFileSync("./posts.json", JSON.stringify(parsedFile), "utf-8")




    res.send("post deleted")

})


app.listen(3000, () => {
    console.log("listening to port 3000");
})