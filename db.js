
const mongoose = require('mongoose');
require("dotenv").config();
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL  = process.env.MONGODB_URL

const DBConnection = () => {
    mongoose.connect(mongoURL,{
    })
    .then(()=>{
        console.log("Database connection successfull");
    })
    .catch((error)=>{
        console.log("Issue in database connection");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = DBConnection;









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