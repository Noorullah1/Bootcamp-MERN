const { query } = require('express');
var express = require('express');
var router = express.Router();
const {usersControlers}= require('../controllers')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Get User Routers
router.get('/',async function(req, res, next){
  const querry=req.querry;
  console.log(querry);

  try{
    const result = await usersControlers.getAllUsers(query);
    res.status(200).send(result)
  }
  catch(error){
    res.status(500).send(error);
  }

});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Get User Routers
router.post('/',async function(req, res, next){
  const querry=req.body;
  console.log(querry);

  try{
    const result = await usersControlers.addUser(body);
    res.status(200).send(result)
  }
  catch(error){
    res.status(500).send(error);
  }

});
module.exports = router;
