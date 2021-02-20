const mongoose = require("mongoose")

const Project = mongoose.model(
    "Project",
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

module.exports = Project