describe('Todos tracker', function(){
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  // it('has two todos', function(){
  //   browser.get('/');
  //   // var todo = element(by.css('#todo'));
  //   var rows = element.all(by.repeater('todo in todos'));
  //   // These are the same
  //   // var todo = $('#todo');
  //   expect(rows.getText()).toEqual(['ToDo1', 'ToDo2']);
  //   // expect(todo.getText()).toEqual('ToDo2');
  // });

  it('has several ToDos', function() {
    browser.get('/');
    var todos = $$('#todos p');
    expect(todos.first().getText()).toEqual('ToDo1: completed');
    expect(todos.last().getText()).toEqual('ToDo2: not completed');
  });
});
