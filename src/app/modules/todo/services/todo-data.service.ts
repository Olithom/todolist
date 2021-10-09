import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  dernierId: number = 0;

  todos: Todo[] = []

  constructor() { }

  addTodo(todo: Todo): Todo {
    if (todo.id < 0) {
      todo.id = ++this.dernierId;
    }
    this.todos.push(todo);
    return todo;
  }

  deleteTodoById(todoId: number): Todo[] {
    this.todos = this.todos
    .filter( t => t.id !== todoId);
    return this.todos;
  }

  updateTodoByID(todoId: number, values: object = {}): Todo | null {
    let todo = this.getTodoByID(todoId);
    if (!todo) {
      return null; 
    }
    Object.assign(todo, values);
    return todo;
  }

  toggleTodoComplete(todo: Todo): Todo | null {
    let updatedTodo: Todo | null = this.updateTodoByID(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoByID(todoId: number): Todo | undefined {
    return this.todos
    .filter((todo: Todo) => todo.id === todoId).pop();
  }
}
