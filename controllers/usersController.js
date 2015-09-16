var express = require('express');
var router = express.Router();
var User = require('../models/user')

function indexUsers(req,res){
  User.find(function(error,users){
    if (error) return res.status(404).status({message: 'there aint no usser'})
      return res.status(200).send(users)
  })
}

function createUser(req, res){
  var user = new User(req.body);
  user.save(function(error){
    if (error) return res.status(403).send({message: "soz not soz"})
    return res.status(200).send(user);
  });
}

module.exports = {
  indexUsers : indexUsers,
  createUser : createUser
}