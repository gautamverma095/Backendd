const express = require("express");
const fs = require("fs");
const port = process.env.PORT || 3000
const dns = require('dns');

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {

    const files = fs.readFileSync("./db.json", "utf-8")
    const parsedFiles = JSON.parse(files)
    res.send(parsedFiles.products)
    res.send("Home Page")


})
app.post("/products/create", (req, res) => {
    
    const files = fs.readFileSync("./db.json", "utf-8")
    
    const parsedFiles = JSON.parse(files)

    parsedFiles.products.push(req.body)

    fs.writeFileSync("./db.json", JSON.stringify(parsedFiles), "utf-8")

    // console.log(parsedFiles);
    res.send("products created")

})


app.put("/products/:productId", (req, res) => {

    const id = req.params
    const ans = req.body
    
    const files = fs.readFileSync("./db.json", "utf-8")
    const parsedFiles = JSON.parse(files)

    const newData = parsedFiles.products.map((el) => {
        if (el.id == id.productId)
        {

            return ans
            
        }
        else {
            return el
        }
    })

    parsedFiles.products = newData



    fs.writeFileSync("./db.json", JSON.stringify(parsedFiles), "utf-8")

    console.log(parsedFiles);
    res.send("products updated")

})
app.delete("/products/:productId", (req, res) => {

    const id = req.params

    const files = fs.readFileSync("./db.json", "utf-8")
    const parsedFiles = JSON.parse(files)

    const newData = parsedFiles.products.filter((el) => {
       return el.id != id.productId
    })

    parsedFiles.products = newData



    fs.writeFileSync("./db.json", JSON.stringify(parsedFiles), "utf-8")

    console.log(parsedFiles);
    res.send("products deleted")

})

// ip address


app.post("/getmeip", (req, res) => {

console.log(req.body);
    dns.lookup(req.body.website, (error, address, family) => {

        // if an error occurs, eg. the hostname is incorrect!
        if (error) {
            console.error(error);
        } else {
            // if no error exists
            res.send(address)
            console.log(
                `The ip address is ${address} and the ip version is ${family}`
            );
        }
    });

  

    

    
})


app.listen(port, () => {
    console.log(`listrning to ${port}`);
})