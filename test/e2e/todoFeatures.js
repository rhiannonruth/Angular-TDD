describe('Todos tracker', function(){
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('has a todo', function(){
    browser.get('/');
    var todo = element(by.css('#todo'));
    expect(todo.getText()).toEqual('ToDo1');
  });
});
