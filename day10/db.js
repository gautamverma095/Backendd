const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const connection = mongoose.connect("mongodb://127.0.0.1:27017/web24")




const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    course: String,

},
    {
        versionKey: false
    })



const StudentModel = mongoose.model("student", studentSchema)


module.exports = {
    connection,
    StudentModel
}
