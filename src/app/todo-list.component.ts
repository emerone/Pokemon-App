import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'todo-list.component.html',
  styles: [`
  main {
    width: max-content;
    margin: 5rem auto;
  }

  h1 {
    font-size: 1.5rem;
  }

  .cta-input {
    display: flex;
  }
  .cta-input:focus-within > button {
    border-bottom: 1px solid #26a69a;
    box-shadow: 0 1px 0 0 #26a69a;
  }
  .cta-input > button {
    background: #0000;
    border: none;
    border-bottom: 1px solid #9e9e9e; 
    margin: 0 0 8px 0;
    transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;;
    cursor: pointer;
  }

  .cta-list > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
  }

  i {
    cursor: pointer;
    color: #7c7;
    padding: 0.3rem;
    border-radius: 125rem
  }
  `]
})
export class AppTodoList {

  removeParent(e: MouseEvent): void {
    const parent: HTMLElement|null = (e.target as HTMLElement).parentElement
    parent?.remove()
  }
}
