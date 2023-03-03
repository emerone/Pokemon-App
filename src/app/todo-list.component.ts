import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'todo-list.component.html',
  styleUrls: ["todo-list.component.css"]
})
export class AppTodoList {
  items: any = []

  removeParent(e: MouseEvent): void {
    const parent: HTMLElement|null = (e.target as HTMLElement).parentElement
    parent?.remove()
  }

  addListItem(e: MouseEvent|KeyboardEvent, input: HTMLInputElement):void {
    if (e instanceof MouseEvent){
      const value: string = input.value 

      if(!value) return
      
      const date: Date = new Date
      const datePiped: string = date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
      
      const item = {text: value as string, date: datePiped as string}
      
      this.items.push(item)
      
      input.value = ''
    }
    if (e instanceof KeyboardEvent){
      if(e.key !== "Enter") return
      const value: string = input.value 

      if(!value) return
      
      const date: Date = new Date
      const datePiped: string = date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
      
      const item = {text: value as string, date: datePiped as string}
      
      this.items.push(item)
      
      input.value = ''
    }
  }
}
