
const mongoose = require('mongoose');
require('dotenv').config();
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL  = process.env.MONGODB_URL
const dbconnect =() =>{
    mongoose.connect(mongoURL,{
    }).then(()=>{
    console.log("database connected.........");
    }).catch((error)=>{
    console.log('issue in database connection.');
    })
};

module.exports = dbconnect;