
const mongoose = require('mongoose');
require('dotenv').config();
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL  = process.env.MONGODB_URL

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db= mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
})

db.on('error',(err)=>{
    console.log('mongodb connection error',err);
})

db.on('disconnected',()=>{
    console.log('mongodb disconnected');
})

module.exports = db;










/*
const dbconnect =() =>{
    mongoose.connect(mongoURL,{

    }).then(()=>{
    console.log("database connected.........");
    }).catch((error)=>{
    console.log('issue in database connection.');
    })
};
*/
//module.exports = dbconnect;