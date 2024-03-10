const express = require('express')
const app = express()
const dbconnect = require('./db');



app.use(express.json());

app.get('/', function (req, res) {
  res.send('Welcome to our hotel....');
});


const personroutes = require('./routes/personroutes');
const menuroutes = require('./routes/menuroutes');

app.use('/person',personroutes);
app.use('/menu',menuroutes);

dbconnect();
app.listen(3000,()=>{
    console.log("Server started at port no 3000");
});