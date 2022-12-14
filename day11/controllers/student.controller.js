const { Student } = require("../Models/Student.model")

const getStudent = async (req, res) => {
    const studentData = await Student.find()
    res.send(studentData)
}

const getStudentById = async (req,res) => {
    const studentData = await Student.find({ _id: req.params.id })
    res.send(studentData)
}

const postStudent = async (req,res) => {
    const data = req.body
    console.log(data);

    if (data.course == "NEM-111") {

        const studentData = new Student(data)
        const ans = await studentData.save()
        res.send(ans)

    }
    else {
        res.send("Please enter a valid course")
    }
}
module.exports = {
    getStudent,postStudent,getStudentById

}