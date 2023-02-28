import { Component, OnInit } from '@angular/core';
import { POKEMONS } from "./mock-pokemonp-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: 'app-root',
  template: `
      <h1>Liste de Pokemon</h1>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'ng-app';
  number: number = 1;
  pokemonList : Array<Pokemon> = POKEMONS;

  ngOnInit(): void {
    this.pokemonList.forEach(element => {
      this.logString(element)
    });
  }

  logString(item: Pokemon) {
    console.log(`La string selectioné est ${item.name}`)
  }
}
