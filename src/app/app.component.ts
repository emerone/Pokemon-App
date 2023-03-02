import { Component, OnInit } from '@angular/core';
import { POKEMONS } from "./mock-pokemonp-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'ng-app';
  pokemonList: Array<Pokemon> = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    this.pokemonList.forEach(element => {
      this.logString(element)
    });
  }

  logString(item: Pokemon) {
    console.log(`La string selectioné est ${item.name}`)
  }

  selectPokemon(item: string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find( el => el.id == +item) 
    if(pokemon) this.pokemonSelected = pokemon
    else {this.pokemonSelected = undefined}
  }
}
