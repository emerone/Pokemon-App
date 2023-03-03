import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'todo-list.component.html',
  styleUrls: ["todo-list.component.css"]
})
export class AppTodoList {
  items: Array<object> = []

  removeParent(e: MouseEvent): void {
    const parent: HTMLElement|null = (e.target as HTMLElement).parentElement
    parent?.remove()
  }

  addListItem(e: MouseEvent|KeyboardEvent, input: HTMLInputElement, cta: HTMLDivElement):void {
    const element: HTMLButtonElement|null = (e.target as HTMLButtonElement)
    const value: string = input.value 

    const date: Date = new Date
    const datePiped: string = date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
    
    this.items.push({text: value, date: datePiped})

    input.value = ''
  }
}
