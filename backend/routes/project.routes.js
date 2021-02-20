const controller = require("../controllers/project.controller") 
console.log("we are in the project router")
module.exports = function(app) {
   app.post("/api/newproject", controller.addProject)
   app.get("/api/projects", controller.getAllProjectsFromOneUser)
}