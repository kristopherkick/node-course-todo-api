//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Create an API'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').deleteOne({
    _id: new ObjectID('5b1ff88cda4b001b0ce85f36')
  }).then((result) => {
    console.log(result);
  });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Create an API'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').findOneAndDelete({
  //   name: 'Kris'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
