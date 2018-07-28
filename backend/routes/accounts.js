'use strict';
import express from 'express';
const router = express.Router();

import { Account } from '../models';

/* GET users listing. */
router.get('/list', (req, res) => {
  Account.find(
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
router.post('/add', (req, res) => {
  let account = new Account({
    "user_id" : req.body.user_id,
    "email" : req.body.useremail
  });
  account.save(err => {
      console.log(err);
      res.send(
        (err === null) ? { msg: '' } : { msg: err }
      );
  });
});

/* DELETE to deleteuser. */
router.delete('/delete/:id', (req, res) => {
  Account.findById(req.params.id).remove(function (err) {
      res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

export default router;
