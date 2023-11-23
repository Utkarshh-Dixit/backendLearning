var express = require('express');
var router = express.Router();

const userModel = require("./users");

router.get('/', function(req, res){
  res.send("This is the home page");
})

// router.get('/create', async function(req, res){
//   const createdUser = await userModel.create({
//     username: "Kush",
//     nickname: "Rinku",
//     description: "Not interested in coding and an unlimited studious person",
//     categories: ['css', 'java']
//   });
//   res.send(createdUser);
// })

router.get('/find', async function(req, res){
  
  let temp = new RegExp("uTkArsh", 'i'); //it will make the search insensitive
  let king = await userModel.find({username: temp});  //it is case sensitive.



  res.send(king);
})

module.exports = router;
/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index');
// });
// //With the use of flash we can use the data of a router in another routes.

// router.get('/shibhu', function(req, res){
//   req.flash("age", 26);
//   res.send("Age save ho gyi");
// });

// router.get('/check', function(req, res){
//   console.log(req.flash("age"));
//   res.send("check kro terminal")
// })
