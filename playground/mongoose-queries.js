const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b2256ca01a6df20841b67e511';

// if (!ObjectID.isValid(id)) {
//   console.log('The ID is not valid.')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo By ID:', todo);
// }).catch((e) => console.log(e));

User.findById('5b211a9d34dd3c1044276a79').then((user) => {
  if (!user) {
    return console.log('That user wasn\'t found');
  }
  console.log('User', user);
}, (e) => {
  console.log(e)
});
