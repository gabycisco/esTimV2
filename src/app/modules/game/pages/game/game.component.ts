import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  es_destacado: boolean;
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  game?: Game;

  constructor(private activatedRoute: ActivatedRoute, private gameService: GameService) {
    gameService.getGameById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.game = data
    })
  }

}
