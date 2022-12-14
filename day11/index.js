const express = require("express")
const app = express()
const {connection} = require("./config/db")
const {studentRouter} = require("./routes/student.route")
const {iaRouter} = require("./routes/ia.route")

app.use(express.json())

const port = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.send("Home page")
})

app.use("/students",studentRouter)
app.use("/ias",iaRouter)





app.listen(port, async () => {

    try {
        await connection
        console.log("connected to db");
        
    } catch (error) {
        console.log("not connected to db");
        console.log(error);

        
    }
    console.log(`listening to ${port}`);
})