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
