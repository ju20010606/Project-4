const db = require('../models/index')

const Project = db.project
const User = db.user

exports.addProject = (req, res) => {
    const description = req.body.description
    const title = req.body.title
    const dueDate = req.body.dueDate
    const toDoList = req.body.toDoList
    const userId = req.body.userId
    const category = req.body.category
    const newHomework = new Project({
         userId,
         description,
         title,
         dueDate,
         category,
         toDoList
    })
    newHomework.save((err, homework)=>{
        if (err) {
            res.status(500).send({message: err})
            return
        } else {
            res.send(homework)
        }
    })
}

exports.getAllProjects = (req,res) =>{
      Project.find({})
      .then((data)=>{
        res.send(data)
      })
      .catch((error)=>{
        res.send(error)
    })
}

exports.getAllProjectsFromOneUser = (req,res) =>{
    Project.find({userId:req.body.userId})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}