const express  = require("express")

const iaRouter = express.Router()
const { IA } = require("../Models/IA.model")


iaRouter.get("/", async (req, res) => {

    const ia = await IA.find()
    res.send(ia)
})


module.exports = {
    iaRouter
}