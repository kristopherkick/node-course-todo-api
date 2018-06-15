const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5b23057b326a37e19f7224e8').then((todo) => {
  console.log(todo);
});
