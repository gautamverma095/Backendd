const express = require("express")
const { connection } = require("./config/db")
const { UserModel } = require("./models/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const saltRounds = 5;



const app = express()

app.use(express.json())


app.post("/signup", async (req, res) => {

    const { email, password } = req.body

    bcrypt.hash(password, saltRounds, async function (err, hash) {

        if (err)
        {
            res.send("something went wrong")
        }
        const newUser = new UserModel({
            email,
            password: hash
        })
        await newUser.save()
        res.send("Signed up successfull")
    });

   
})

app.post("/login", async (req, res) => {

    const { email, password } = req.body

    const user = await UserModel.findOne({ email: email })
    const hash = user.password

    bcrypt.compare(password, hash, function (err, result) {
        // result == true
        if (result) {
            var token = jwt.sign({ email: email }, 'shhhhh');

            res.status(201).json({msg:"login successfull", token: token })
        }
        else {
            res.send("login not successful")
        }


    });

    const result = await UserModel.findOne({ email, password })
    
})


app.get("/dashboard", (req, res) => {
    const token = req.headers.authorization.split(" ")[1]
    console.log(token);

    try {
        var decoded = jwt.verify(token, 'shhhhh');
        const { email } = decoded
        res.send(`${email} your dashboard`)

    } catch (error) {
        console.log(error);

    }
})





app.listen(3000, () => {

    connection()
    console.log("listening to port 3000");
})