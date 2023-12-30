import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

export interface Game {
  id: number;
  nombre: string;
  requisito_cpu: string;
  requisito_memoria: string;
  requisito_almacenamiento: string;
  genero: string;
  precio: number;
  poster: string;
  background: string;
  descripcion_corta: string;
  descripcion_larga: string;
  es_destacado: boolean;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent {

  games!: Game[];
  constructor(private gamesService: GameService) {
    this.gamesService.getGames().subscribe(data=>{
      this.games= data;
    })

  }
}