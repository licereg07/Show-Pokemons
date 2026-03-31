import { Component, OnInit, signal } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon-service';

@Component({
  selector: 'app-pokemon-component',
  standalone: false,
  templateUrl: './pokemon-component.html',
  styleUrl: './pokemon-component.css',
})
export class PokemonComponent implements OnInit {

  pokemons = signal<Pokemon[]>([]);

  constructor(private service: PokemonService) {}


  ngOnInit(): void {
    this.service.getPokemons().subscribe(
      {
        next: json => this.pokemons.set(json)
      }
    );
  }

  
}
