var express = require('express');
var router = express.Router();

var models = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
})

router.get('/listusers', function(req, res) {
  models.Account.find({}, function (err, accounts) {
    res.render('userlist', {
      userlist: accounts
    });
  })
})

module.exports = router;
