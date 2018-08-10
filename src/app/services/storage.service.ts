import { Injectable } from '@angular/core';
import {TodoItem} from "../interfaces/todo-item";

​
@Injectable()
export class StorageService {

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
​
  constructor() { }
​

  setData(todoListStorageKey: string, todoList: TodoItem[]) {
    
  }
}
