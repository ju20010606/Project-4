const express = require('express')
const bodyParser = require('body-parser')
const dbConfig = require('./config/db.config')
const app = express()
const cors = require('cors')
//parse requests of content-type - Application/ json
app.use(cors())
app.use(bodyParser.json())

// parse requests of content type = application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//SETUP MONGOOSE 

const db = require('./models/index')
const Role = db.role

//connect to mongo database
db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.db}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('Successfully connected to MongoDB')
        initial()
    })
    .catch((err)=>{
        console.error('Connection error',err)
        process.exit()
    })

//simple route, do i work?
app.get('/', (req,res)=>{
    res.json({message: 'Welcome to the home page'})

})

//import the routes
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)


//set the port, listen for request
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'user' to roles collection");
        });
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }