const express = require("express")
const { connection } = require("./config/db")
const app = express()
app.use(express.json())

const port = process.env.PORT || 3000


connection()
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})