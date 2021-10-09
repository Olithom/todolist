import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent {
  newTache: Todo = new Todo();

  @Output()
  ajout: EventEmitter<Todo> = new EventEmitter();

  ajoutTache() {
    this.ajout.emit(this.newTache);
    this.newTache = new Todo();
  }
}
