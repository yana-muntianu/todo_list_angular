import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';
import {StorageService} from "./services/storage.service";


@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputFieldComponent,
    ListManagerComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoListService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
