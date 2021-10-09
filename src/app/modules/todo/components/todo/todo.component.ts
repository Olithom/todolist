import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoDataService } from '../../services/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

 
  nbRestantes: number = 0;

  constructor(
    private todoDataService: TodoDataService
  ){
    
  }

  toggleTacheComplete(tache: Todo) {
    this.todoDataService.toggleTodoComplete(tache);
    this.nbRestantes += tache.complete ? -1 : 1;
  }

  onAjoutTache(newTache: Todo) {
     this.todoDataService.addTodo(newTache);
    if (!newTache.complete) {
      this.nbRestantes++;
    }
    newTache = new Todo();
  }

  removeTache(tache: Todo) {
    if (!tache.complete) {
      this.nbRestantes--;
    }
    this.todoDataService.deleteTodoById(tache.id);
  }

  get taches(): Todo[] {
    return this.todoDataService.getAllTodos();
  }
}
