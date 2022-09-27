import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './pokemon-z.component.html',
  styleUrls: ['./pokemon-z.component.css']
})
export class PokemonZComponent implements OnInit {

  constructor() { }
    nome = "terzo"
  ngOnInit(): void {
  }

}
