const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')
const db = require('../models/index')
const User = db.user
const Role = db.role

//This function will verify our web token
verifyWebToken = (req, res, next) =>{
    //First we declare our token which is passed in our headers
    let token = req.headers['x-access-token']
     
    //if not token given we respond with an error
    if(!token){
        return res.status(403).send({message: 'No token provided'})
    }

    // We try to verify the token
    jwt.verify(token, config.secret, (err, decoded)=>{
        if(err){
            return res.status(401).send({message: 'Unathorized'})
        }
        // set userid to decoded id
         req.userId = decoded.userId
         next()
    })

}

//Another function to verify if admin or not
isAdmin = (req, res, next) =>{
    //.exec return the user we want access to (if i am not mistaken .then does not)
    User.findOne(req.user.id).exec((err, user)=>{
        // throwing an error because this user does not exist
        if(err){
            return res.status(500).send({message: err})
        }

        Role.find({
            _id: {$in: user.roles}
          },(err, roles) =>{
              if(err){
                return res.status(500).send({message: err})
            }
            for( let i = 0; i< roles.length; i++){
                if(roles[i].name === 'admin'){
                    next()
                    return
                }
            }
            res.status(403).send({message: 'Requires admin Role'})
          })
    })
}

const authJwt ={
    verifyWebToken,
    isAdmin
}

module.exports = authJwt