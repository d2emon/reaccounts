var mongoose = require('mongoose');


var accountSchema = mongoose.Schema({
    user_id: String
});
var Account = mongoose.model('Account', accountSchema);

var configSchema = mongoose.Schema({
    key: String,
    value: String
});
var Config = mongoose.model('Config', configSchema);

var banSchema = mongoose.Schema({
    user_id: String
});
var Ban = mongoose.model('Ban', banSchema);


module.exports = {
    Account,
    Config,
    Ban
};