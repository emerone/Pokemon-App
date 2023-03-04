import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'todo-list.component.html',
  styleUrls: ["todo-list.component.css"]
})

export class AppTodoList {
  items: {text: string, date: string}[] = []

  removeParent(e: MouseEvent): void {
    const parent: HTMLElement|null = (e.target as HTMLElement).parentElement
    parent?.remove()
  }

  addListItem(e: MouseEvent|KeyboardEvent, input: HTMLInputElement):void {

    const value: string = input.value 
    
    const date: Date = new Date
    const datePiped: string = date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
    
    const item = {text: value as string, date: datePiped as string}

    if (e instanceof MouseEvent){
      e.preventDefault;

      if(!value) return
      
      this.items.push(item)
      
      input.value = ''
    }

    if (e instanceof KeyboardEvent){
      if(e.key !== "Enter") return

      if(!value) return
      
      this.items.push(item)
      
      input.value = ''
    }
  }
}
