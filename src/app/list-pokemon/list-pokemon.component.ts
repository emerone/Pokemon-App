import { Component, OnInit } from '@angular/core';
import { POKEMONS } from "../mock-pokemonp-list";
import { Pokemon } from "../pokemon";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Array<Pokemon> = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  value: string = "1123456789110";

  ngOnInit(): void {
    this.pokemonList.forEach(element => {
      this.logString(element)
    });
  }

  logString(item: Pokemon) {
    console.log(`La string selectioné est ${item.name}`)
  }

  selectPokemon(item: string) {
    this.value = item;
    if(item === "") this.value = "123456789110" 
    console.log(item)
    const pokemon: Pokemon|undefined = this.pokemonList.find( el => el.id == +item) 
    if(pokemon) this.pokemonSelected = pokemon
    else {this.pokemonSelected = undefined}
  }
}
