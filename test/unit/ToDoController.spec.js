describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with several toDos', function() {
    expect(ctrl.todos).toEqual(["ToDo1","ToDo2"]);
  });
});
