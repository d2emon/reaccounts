var mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
  user_id: String
});

var Account = mongoose.model('Account', accountSchema);

module.exports = {
  Account: Account
};
