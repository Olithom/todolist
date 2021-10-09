import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance todo', () => {
    expect(new Todo()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let todo = new Todo({
      titre: 'hello',
      complete: true
    });
    expect(todo.titre).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
