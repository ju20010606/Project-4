const controller = require("../controllers/homework.controller") 

module.exports = function(app) {
   app.post("/api/newhomework", controller.addHomework)
}