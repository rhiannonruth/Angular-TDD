describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with several todos', function() {
    var todos = [
      {text: "ToDo1", completed: false},
      {text: "ToDo2", completed: true}
    ];

    expect(ctrl.todos).toEqual(todos);
  });

  it('allows new items to be created', function() {
    ctrl.addToDo('Wash the dog');
    var lastItem = {text: 'Wash the dog', completed: false};
    expect(ctrl.todos.slice(-1)).toContain(lastItem);
  });

  // it('can remove items', function(){
  //   expect(ctrl.todos.slice(-1)).toContain({text: "ToDo2", completed: true});
  //   ctrl.removeLastToDo();
  //   expect(ctrl.todos.slice(-1)).not.toContain({text: "ToDo2", completed: true});
  //   expect(ctrl.todos.slice(-1)).toContain({text: "ToDo1", completed: false});
  // });

  it('removes the last todo', function() {
    initialCount = ctrl.todos.length;
    ctrl.removeLastToDo();
    expect(ctrl.todos.length).toEqual(initialCount - 1);
  });
});
