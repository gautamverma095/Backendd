const {Router} = require("express")

const { getStudent, postStudent, getStudentById} = require("../controllers/student.controller")

const studentRouter = Router()



studentRouter.get("/", getStudent)

studentRouter.get("/:id",postStudent)
studentRouter.post("/addstudent",getStudentById)


module.exports = {
    studentRouter
}