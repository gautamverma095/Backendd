const express = require("express")

const app = express()

app.use(express.json())

const port = process.env.PORT || 3000
const expressValidator = require("express-validator")

const { body, validationResult } = require('express-validator');

app.post("/movies",body("name").isString(),body("id").isNumeric(),body("rating").isNumeric() , (req, res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return res.send("success")





})

app.listen(port, () => {
    console.log(`listening to ${port}`);
})

// ID: number
// Name: string
// Rating: number
// Description: string
// Genre: string
// Cast: string[]