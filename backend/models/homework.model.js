const mongoose = require("mongoose")

const Homework = mongoose.model(
    "Homework",
    new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title:String,
        dueDate:Date,
        description:String,
        toDoList:[]
        })
)

module.exports = Homework