import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'todo-list.component.html',
  styleUrls: ["todo-list.component.css"]
})
export class AppTodoList {

  removeParent(e: MouseEvent): void {
    const parent: HTMLElement|null = (e.target as HTMLElement).parentElement
    parent?.remove()
  }
}
