const express = require("express")

const app = express()
const port = process.env.PORT || 3000


// middleware function -> (which has access to request object ,response object and next()  )


app.use((req, res, next) => {
    console.log(req.url);
    next()

})

app.get("/", (req, res) => {
    res.send("Home page")
})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.get("/contact", (req, res) => {
    res.send("Contact page")
})


app.listen(port, () => {
    console.log(`listening to ${port}`);
})