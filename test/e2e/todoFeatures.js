describe('Todos tracker', function() {
  it('has several todos', function() {
    browser.get('/');
    // $ is not jQuery - https://github.com/makersacademy/course/blob/master/pills/angular_protractor.md
    // var todos = $$(by.css('.todo'));
    // var todos = $$('#todos p'); this is the shortcut for below
    var todos = element(by.css('#todos')).$$('p');
    expect(todos.first().getText()).toEqual('ToDo1: not completed');
    expect(todos.last().getText()).toEqual('ToDo2: completed');
  });
});
