var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
//With the use of flash we can use the data of a router in another routes.

router.get('/shibhu', function(req, res){
  req.flash("age", 26);
  res.send("Age save ho gyi");
});

router.get('/check', function(req, res){
  console.log(req.flash("age"));
  res.send("check kro terminal")
})

module.exports = router;
