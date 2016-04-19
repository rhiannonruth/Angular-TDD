describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with two toDos', function() {
    expect(ctrl.todo).toEqual("ToDo1");
    expect(ctrl.todo).toEqual("ToDo2");
  });

});
