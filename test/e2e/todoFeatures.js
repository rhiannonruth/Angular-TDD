describe('Todos tracker', function() {

  var findItems = function() {
    return element(by.css('#todos')).$$('p');
  };

  it('has several todos', function() {
    browser.get('/');
    // $ is not jQuery - https://github.com/makersacademy/course/blob/master/pills/angular_protractor.md
    // var todos = $$(by.css('.todo'));
    // var todos = $$('#todos p'); this is the shortcut for below
    var todos = findItems();
    expect(todos.first().getText()).toEqual('ToDo1: not completed');
    expect(todos.last().getText()).toEqual('ToDo2: completed');
  });

  it('can have items added', function() {
    browser.get('/');
    var toDoText = 'Wash the dog';
    $('#new-todo').clear().sendKeys(toDoText);
    $('#add-todo').click();
    var lastTodo = findItems().last().getText();
    expect(lastTodo).toContain(toDoText + ': not completed');
  });
});
