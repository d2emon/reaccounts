var express = require('express');
var router = express.Router();

var models = require('../models');

/* GET users listing. */
router.get('/list', function(req, res) {
  models.Account.find({}, function (err, accounts) {
    res.json(accounts);
  });
});

module.exports = router;
