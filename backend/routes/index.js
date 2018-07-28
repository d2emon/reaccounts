'use strict';
import express from 'express';
const router = express.Router();

import { Account } from '../models';

// Remove CORS
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', (req, res) => {
  res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/listusers', (req, res) => {
  Account.find(
    {},
    null,
    {sort: {user_id: 1}},
    function (err, accounts) {
      res.render('userlist', {
        userlist: accounts
      });
    }
  );
});

router.get('/newuser', (req, res) => {
  res.render('newuser', { title: 'Add New User' });
});

router.post('/adduser', (req, res) => {
    var account = new Account({
      "user_id" : req.body.user_id,
      "email" : req.body.useremail
    });
    account.save(err => {
        if (err) {
            console.log(err);
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.redirect("/listusers");
        }
    });
});

export default router;
