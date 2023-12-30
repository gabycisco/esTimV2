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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  games!: Game[];
  
  constructor(private activatadRoute: ActivatedRoute, private gamesService: GameService) {
    console.log(this.activatadRoute.snapshot.params['id'])

    this.gamesService.getGames().subscribe(data=>{
      this.games= data;
      //this.game = this.games.find(e => e.id == this.activatadRoute.snapshot.params['id'])
    })

    
    
  }
}
