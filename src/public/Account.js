const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account = new Schema({
    username: String ,
    password: String
} , {
    collection: 'Account'
});

const AccountModel = mongoose.model('account', account);
/*
AccountModel.create({
    username: 'thao nguyen',
    password: 12345
})
*/
AccountModel.find({
})
.then(function(data){
    console.log('data', data);
})
.catch(function(err){
    console.log('loi',err);
})

module.exports = AccountModel