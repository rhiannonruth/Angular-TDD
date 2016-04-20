describe('Todos tracker', function() {
  it('has several todos', function() {
    browser.get('/');
    // $ is not jQuery - https://github.com/makersacademy/course/blob/master/pills/angular_protractor.md
    // var todos = $$(by.css('.todo'));
    // console.log($$(by.css('.todo')));
    // browser.pause();
    // expect(todos.getText()).toEqual(['ToDo1','ToDo2']);
    var todos = $$('#todos p');
    expect(todos.first().getText()).toEqual('ToDo1');
    // expect(todos.last.getText()).toEqual('ToDo2');
  });
});
