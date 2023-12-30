import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-buy-game',
  templateUrl: './buy-game.component.html',
  styleUrls: ['./buy-game.component.css']
})
export class BuyGameComponent {
  game?: Game;

  constructor(private activatedRoute: ActivatedRoute, private gameService: GameService) {
    gameService.getGameById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.game = data
    })
  }
}
