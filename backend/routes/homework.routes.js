const controller = require("../controllers/homework.controller") 
console.log("we are in the homework router")
module.exports = function(app) {
   app.use((req, res, next) => {
      res.header(
          'Access-Control-Allow-Headers',
          'x-access-token, Origin, Content-type, Accept' 
      )
      next()
  })
   app.get("/api/onehomework/:id", controller.getHomeworkById)
   app.delete("/api/onehomework/:id", controller.deleteHomeworkById)
   app.post("/api/newhomework", controller.addHomework)
   app.get("/api/homeworks/:id", controller.getAllHomeworksFromOneUser)
   app.get("/api/allhomeworks", controller.getAllHomeworks)
   app.delete("/api/allhomeworks", controller.clearOut)
   app.get("/api/homeworkdate/:date", controller.getAllHomeworksByDate)

   app.put("/api/todolist",controller.deleteTask)
   app.put("/api/newtodolist", controller.newTask)
}