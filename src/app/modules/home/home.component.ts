import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  games: Game[] = []
  game?: Game 

  constructor(private activatadRoute: ActivatedRoute) {
    console.log(this.activatadRoute.snapshot.params['id'])

 

    this.game = this.games.find(e => e.id == this.activatadRoute.snapshot.params['id'])
    
  }
}
