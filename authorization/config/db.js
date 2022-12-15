const mongoose = require("mongoose")
mongoose.set('strictQuery', false)

const connection =  () => {

    mongoose.connect("mongodb://127.0.0.1:27017/auth",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
    console.log(`connected to ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {
    connection
}
