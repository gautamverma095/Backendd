const http = require("http")
const fs  = require("fs") //file system

const server = http.createServer((req, res) => {


    if (req.url === "/posts")
    {

        const data = fs.readFileSync("./posts.json", "utf-8")
        res.setHeader("content-type","application/json")
        
        return res.end(data)
    }

    // else if (req.url === "/")
    // {
    //     res.setHeader("content-type", "text/html")
    //    return  res.end("<h2>I am h2</h2>")
    //     }

    
    else {
        return res.end("gautam is here")
    }

})



server.listen(3000)