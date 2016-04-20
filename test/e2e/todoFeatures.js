describe('Todos tracker', function() {
  it('has a todo', function() {
    browser.get('/');
    // $ is not jQuery - https://github.com/makersacademy/course/blob/master/pills/angular_protractor.md
    var todo = $('#todo');
    expect(todo.getText()).toEqual('ToDo1');
  });
});
