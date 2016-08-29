var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

//temp TEST todos
var todos = [{
  id: 1,
  description: 'Meet mum for lunch',
  completed: false,
}, {
  id: 2,
  description: 'Go to market',
  completed: false
}, {
  id: 3,
  description: 'Read Harry Potter',
  completed: false
}];


app.get('/', function (req, res) {
 res.send('Todo api root.');
});

// GET /todos
app.get('/todos', function (req, res) {
  res.json(todos);
});

// GET /todo/:id
app.get('/todos/:id', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo;

  todos.forEach(function (todo) {
    if(todoId === todo.id) {
      matchedTodo = todo;
    }
  });

  if (matchedTodo) {
    res.json(matchedTodo);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, function () {
  console.log('Express listening on port' + PORT + '!');
});
