import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCounter } from "./counter.component";
import { AppTodoList } from "./todo-list.component";

@NgModule({
  declarations: [
    AppTodoList,
    AppCounter,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppTodoList]
})
export class AppModule { }
