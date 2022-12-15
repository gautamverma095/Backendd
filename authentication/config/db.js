const mongoose = require("mongoose")
mongoose.set('strictQuery', false);




const connection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/auth").then((data) => {
        console.log(`connected database is ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
    })

}
module.exports = {
    connection
}