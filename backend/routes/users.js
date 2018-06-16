var express = require('express');
var router = express.Router();

var models = require('../models');

/* GET users listing. */
router.get('/list', function(req, res) {
  models.Account.find(
    {},
    null,
    {sort: {user_id: 1}},
    function (err, accounts) {
      console.log(err, accounts);
      res.json(accounts);
    }
  );
});

/* POST to adduser. */
router.post('/add', function(req, res) {
  var account = new models.Account({
    "user_id" : req.body.user_id,
    "email" : req.body.useremail
  });
  account.save(function (err, doc) {
      console.log(err)
      res.send(
        (err === null) ? { msg: '' } : { msg: err }
      );
  });
});

/* DELETE to deleteuser. */
router.delete('/delete/:id', function(req, res) {
  models.Account.findById(req.params.id).remove(function (err) {
      res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;
