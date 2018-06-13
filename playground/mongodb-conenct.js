//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // db.collection('Todos').insertOne({
  //   text: 'Create an API',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.');
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Kris',
  //   age: 29,
  //   location: 'Crystal Lake'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.');
  //   }

  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
