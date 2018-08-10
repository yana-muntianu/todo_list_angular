import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import {TodoListService} from "../services/todo-list.service";

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor(private todoListService: TodoListService) {
  }
​
  ngOnInit() {
    this.todoList = this.todoListService.getTodoList()
  }

  addItem(title: string) {
    this.todoList.push({ title });
  }
  removeItem(item) {
    this.todoListService.deleteItem(item);

}
