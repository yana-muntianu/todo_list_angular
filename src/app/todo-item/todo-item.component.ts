import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  removeItem() {
    this.remove.emit(this.item);
  }

  constructor() { }

  ngOnInit() { }
​}

