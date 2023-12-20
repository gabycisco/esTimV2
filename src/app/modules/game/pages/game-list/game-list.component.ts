import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

export interface Game {
  id: number;
  nombre: string;
  poster: string;
  background: string;
  requisitos : { [key: string]: string}; 
  genero: string;
  precio: number;
  descripcion_corta: string;
  descripcion_larga: string;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent {

  gamesArray!: Game[];
  constructor(private gamesService: GameService) {
    this.gamesService.getGames().subscribe(data=>{
      this.gamesArray = data;
    })

  }
}