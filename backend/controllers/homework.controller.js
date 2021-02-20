const db = require('../models/index')

const Homework = db.homework
const User = db.user

exports.addHomework = (req, res) => {
    const description = req.body.description
    const title = req.body.title
    const dueDate = req.body.dueDate
    const toDoList = req.body.toDoList
    const userId = req.body.userId
    const category = req.body.category
    const newHomework = new Homework({
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

exports.getAllHomeworks = (req,res) =>{
      Homework.find({})
      .then((data)=>{
        res.send(data)
      })
      .catch((error)=>{
        res.send(error)
    })
}

exports.getAllHomeworksFromOneUser = (req,res) =>{
    Homework.find({userId:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}

exports.getHomeworkById = (req, res) =>{
    Homework.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}

exports.deleteHomeworkById = (req, res) =>{
    Homework.remove({_id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
 }




exports.getAllHomeworks = (req,res) =>{
    Homework.find({})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}

exports.clearOut = (req, res) =>{
    Homework.remove({})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}
exports.getAllHomeworksByDate = (req, res) =>{
    Homework.find({dueDate:req.params.date})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}

exports.deleteTask = (req, res) =>{
    Homework.findByIdAndUpdate({_id:req.body.id},{$pull:{toDoList:req.body.task}})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}

exports.newTask = (req, res) =>{
    Homework.findByIdAndUpdate({_id:req.body.id},{$push:{toDoList:req.body.task}}, {multi:true})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
}