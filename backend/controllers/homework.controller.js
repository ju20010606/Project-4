const db = require('../models/index')

const Homework = db.homework
const User = db.user

exports.addHomework = (req, res) => {
    const description = req.body.description,
    const title = req.body.title,
    const dueDate = req.body.dueDate,
    const toDoList = req.body.toDoList
    const newHomework = new Homework({
         description,
         title,
         dueDate,
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