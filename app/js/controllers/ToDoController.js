toDoApp.controller('ToDoController', [function() {
  this.todos = [
    {text: 'ToDo1', completed: false},
    {text: 'ToDo2', completed: true}
  ];

  this.addToDo = function(toDoText) {
    this.todos.push( {text: toDoText, completed: false} );
  };

  this.removeLastToDo = function() {
    this.todos.pop();
  };
}]);
