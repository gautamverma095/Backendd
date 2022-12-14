const express = require("express")
const connection = require("./config/db")
const app = express()
app.use(express.json())
const {studentRouter} = require("./routes/student.route")

const port = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.send("home page")
    
})

app.use("/students",studentRouter)

app.listen(port, async () => {

    try {
        await connection
        console.log("connected to db");
        
    } catch (error) {
        console.log("not connected ot db");
        console.log(error);
        
    }
    console.log(`listening to port ${port}`);
    
})