import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    user_id: String
});
export const Account = mongoose.model('Account', accountSchema);

const configSchema = mongoose.Schema({
    key: String,
    value: String
});
export const Config = mongoose.model('Config', configSchema);

const banSchema = mongoose.Schema({
    user_id: String
});
export const Ban = mongoose.model('Ban', banSchema);

const userSchema = mongoose.Schema({
    username: String,
    password: String
    // data1: String,
    // data2: String,
    // data3: String,
    // data4: String,
});
export const User = mongoose.model('User', userSchema);

const motdSchema = mongoose.Schema({
    text: String
});
export const MessageOfTheDay = mongoose.model('Motd', motdSchema);
