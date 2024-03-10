
const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

const dbconnect =() =>{
    mongoose.connect(mongoURL,{
    }).then(()=>{
    console.log("database connected.........");
    }).catch((error)=>{
    console.log('issue in database connection.');
    })
};

module.exports = dbconnect;