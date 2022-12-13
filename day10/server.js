const express = require("express")
const { connection, StudentModel } = require("./db")


const app = express()
app.use(express.json())
const port = process.env.PORT || 3000




app.get("/", (req, res) => {

    res.send("home page")
})


app.get("/students", async (req, res) => {
    const results = await StudentModel.find()
    console.log("results");

    res.send(results)
})

app.post("/addstudent", async (req, res) => {

    const data = req.body
    const student = new StudentModel(data)
    await student.save()

    res.send(student)

})




app.listen(port, async () => {

    try {
        await connection
        console.log("connected to db ");


    } catch (err) {
        console.log("error connecting to db");
        console.log(err);
    }

    console.log(`listening to ${port}`);


})





