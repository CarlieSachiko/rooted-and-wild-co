var Bouquet = require('../models/bouquet');
var ObjectId = require('mongoose').Schema.Types.ObjectId;

// module.exports = {
//   getAllTodos,
//   createTodo,
//   deleteTodo
// };

// function getAllTodos(req, res, next) {
//   Todo.find({user: req.user._id}).exec().then(todos => {
//     res.json(todos);
//   }).catch(err => res.status(500).json(err));
// }

// function createTodo(req, res, next) {
//   req.body.user = req.user._id;
//   Todo.create(req.body).then(newTodo => {
//     res.status(201).json(newTodo);
//   }).catch(err => res.status(400).json(err));
// }

// function deleteTodo(req, res, next) {
//   Todo.findByIdAndRemove(req.params.id).then(deletedTodo => {
//     res.json(deletedTodo);
//   }).catch(err => res.status(400).json(err));
// }
