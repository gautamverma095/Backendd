const mongoose = require("mongoose")
mongoose.set('strictQuery', true);


const main = async () => {

    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/web24")
        console.log("connection successfull");

        // await StudentModel.insertMany([{name:"Vaishali",age:24,course:"java"}])
        const res = await StudentModel.find()
        console.log(res);
        connection.disconnect()

    } catch (err) {
        console.log(err);
    }

}
const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    course: String,

},
    {
        versionKey: false
    })



const StudentModel = mongoose.model("student", studentSchema)

main()