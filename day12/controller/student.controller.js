const { Student } = require("../models/student.model")

const getStudents = async (req, res) => {
    const studentData = await Student.find()

    res.send(studentData)
    

}

module.exports = {
    getStudents
}