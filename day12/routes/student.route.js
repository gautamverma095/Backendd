const express = require("express")
const { getStudents } = require("../controller/student.controller")

const studentRouter = express.Router()


studentRouter.get("/",getStudents)

module.exports = {
    studentRouter

}