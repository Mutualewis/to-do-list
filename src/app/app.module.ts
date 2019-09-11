import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule  ],
  declarations: [ AppComponent, HelloComponent, TodosComponent, TodoItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
