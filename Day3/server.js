const express = require("express")

const app = express()
const fs = require("fs")


app.use(express.json())
const port = process.env.PORT || 3000

app.get("/", (req, res) => {

 
    res.send("homepage")

})
app.post("/addproducts", (req, res) => {
    const file = fs.readFileSync("./db.json", "utf-8")

    let parsedFile = JSON.parse(file)
    parsedFile.products.push(req.body)

    console.log(parsedFile);
    fs.writeFileSync("./db.json", JSON.stringify(parsedFile), "utf-8")
    
    res.send("product added")
   
})






// app.post("/addpost", (req, res) => {
//     console.log(req.body);
//     // fs.writeFileSync("./addpost.txt", JSON.stringify(req.body),"utf-8")
//     fs.appendFileSync("./addpost.txt", JSON.stringify(req.body),"utf-8")
//     res.send("enetered")
// })


// app.get("/profile", (req, res) => {

//     res.send(req.body )

// })



app.listen(port, () => {
    console.log(`listening at ${port} `);
})