const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

const connection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data) => {
      console.log(`connected with server${data.connection.host}`)
    }).catch((err) => {
        console.log(`${err}: did not connect`);
    })
    
}

module.exports = {
    connection
}