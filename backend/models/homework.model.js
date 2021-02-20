const mongoose = require("mongoose")

const Homework = mongoose.model(
    "Homework",
    new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title:String,
        dueDate:String,
        description:String,
        category:String,
        toDoList:[String]
        })
)

module.exports = Homework