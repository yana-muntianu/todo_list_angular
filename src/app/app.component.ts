import { Component } from '@angular/core';
import {TodoItem} from "./interfaces/todo-item";
import {ListManagerComponent} from "./list-manager/list-manager.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
}
