const http = require("http")

const server = http.createServer((req, res) => {


    if (req.url === "/adu")
    {
        return res.end("adu is here")
    }

    else if (req.url === "/")
    {
        res.setHeader("content-type", "text/html")
       return  res.end("<h2>I am h2</h2>")
        }
    else {
        return res.end("gautam is here")
    }

})



server.listen(3000)