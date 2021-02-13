const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.user = require('./user.model')
db.role = require('./role.model')
db.homework = require('./homework.model')

db.Roles = ['users','admin']

module.exports = db