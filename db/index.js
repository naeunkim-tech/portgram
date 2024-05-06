const mongoose = require("mongoose");
// const dotenv = require("dotenv");


var db;

MongoClient.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5', function(err, client){
  if(err) { return console.log(err)};

  db = client.db('elice_project_01');
});

dbName.collection('users').insertOne({name: 'Amy Kim', age: 20}, function(err, result){
    console.log('저장완료');




// module.exports = { MongoConnect }