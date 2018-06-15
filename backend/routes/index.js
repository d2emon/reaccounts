var express = require('express');
var router = express.Router();

var models = require('../models');

// Remove CORS
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/listusers', function(req, res) {
  models.Account.find({}, function (err, accounts) {
    res.render('userlist', {
      userlist: accounts
    });
  });
});

router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
})

router.post('/adduser', function(req, res) {
    var account = new models.Account({
      "user_id" : req.body.user_id,
      "email" : req.body.useremail
    })
    account.save(function (err, doc) {
        if (err) {
            console.log(err)
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.redirect("/listusers");
        }
    });
});
module.exports = router;
