const express = require("express")
const { connection } = require("./config/db")
const app = express()
app.use(express.json())
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const saltRounds = 5;
const { UserModel } = require("./models/user.model")



const authentication = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    try {
        var decoded = jwt.verify(token, 'shhhhh');

        req.body.email = decoded.email
        next()

    } catch (error) {
        console.log(error);
        res.send("login again")

    }

}


const authorization = (Current_role) => {
  return  async (req, res, next) => {
        const email = req.body.email
        const user = await UserModel.findOne({ email: email })
        const role = user.role


        if (Current_role.includes(role)) {
            next()

        }
        else {
            res.send("not authorised")
        }
    }
}


app.post("/signup", async (req, res) => {

    const { email, password } = req.body
    
    bcrypt.hash(password, saltRounds, async function (err, hash) {

        if (err) {
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

            res.status(201).json({ msg: "login successfull", token: token })
        }
        else {
            res.send("login not successful")
        }


    });



})


// authentication
app.get("/dashboard", authentication,async (req, res) => {

    res.send("dashboard")
})

// no authentication ,no authorization
app.get("/products", (req, res) => {
    res.send("your products are...")
    
})


//  authentication, no authorization
app.get("/products/cart", authentication,(req, res) => {

        res.send("your products in your cart...")
    
})


//  authentication,  authorization
app.get("/products/create", authentication,authorization("seller"),async (req, res) => {
    
            res.send("Products created...")
})








app.listen(3000, () => {
    connection()
   
    console.log("listening to port 3000");
})