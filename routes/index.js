var express = require('express');
var router = express.Router();

const userModel = require("./users");

router.get('/', function(req, res){
  res.send("This is the home page");
})

// router.get('/create', async function(req, res){
//   const createdUser = await userModel.create({
//     username: "AinUtkarsh",
//     nickname: "Any",
//     description: "Not interested in coding and an unlimited studious person",
//     categories: ['css', 'java']
//   });
//   res.send(createdUser);
// })

router.get('/find', async function(req, res){
  
  // let temp = new RegExp("uTkArsh", 'i'); //it will make the search insensitive

  // let temp = new RegExp("^utkarsh$", 'i');
  // let king = await userModel.find({username: temp});  //it is case sensitive.
  // let king = await userModel.find({categories: {$all: ['java', 'css']}}); //it will return all the users data which has java and css as categories.   


// var date1 = new Date("2023-11-21");
// var date2 = new Date("2023-11-23");
// //gte : greater than equal and lte : less than equal
// let king = await userModel.find({datecreated: {$gte: date1, $lte: date2}}); //it will find the data between specific dates.

// let king = await userModel.find({
//   $expr: {
//      $and: [
//       {$gte: [{$strLenCP: "$nickname"}, 0]},
//       {$lte: [{$strLenCP: "$nickname"}, 146]}  //it will print all the data in which nickname length is between 0 and 146.
//      ]
//   }
// })

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
