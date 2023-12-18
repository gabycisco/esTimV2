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
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  games: Game[] = []
  game?: Game 

  constructor(private activatadRoute: ActivatedRoute) {
    console.log(this.activatadRoute.snapshot.params['id'])

    this.games = [
      {
        "id": 1,
        "nombre": "RED DEAD REDEMPTION 2",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-2500K / AMD FX-6300",
          memoria: "8 GB RAM",
          almacenamiento: "150 GB de espacio disponible"
        },
        "genero": "Acción, Aventura",
        "precio": 59.99,
        "poster": "https://i.blogs.es/41c79d/rdr2_officialart2_desktop/1366_2000.jpeg",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 2,
        "nombre": "Cyberpunk_2077",
        "requisitos": {
          requerimientos_CPU: "Intel Core i7-4790 / AMD Ryzen 3 3200G",
          memoria: "12 GB RAM",
          almacenamiento: "70 GB de espacio disponible"
        },      
        "genero": "RPG, Acción",
        "precio": 49.99,
        "poster": "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/b9ea2dc46d95cf9fa3f77209e27ae7a6488368f1-1280x720.jpg",
        "background": "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/872822c5e50dc71f345416098d29fc3ae5cd26c1-1280x720.jpg"
      },
      {
        "id": 3,
        "nombre": "FIFA 23",
        "requisitos": {
          requerimientos_CPU: "Intel Core i3-6100 / AMD Athlon X4 880K",
          memoria: "8 GB RAM",
          almacenamiento: "50 GB de espacio disponible"
        },
        "genero": "Deportes",
        "precio": 39.99,
        "poster": "https://prod.assets.earlygamecdn.com/images/FIFA-23-Cover-2.jpeg?transform=galleryItem_webp",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 4,
        "nombre": "Assassin's Creed Valhalla",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-4460 / AMD Ryzen 3 1200",
          memoria: "8 GB RAM",
          almacenamiento: "50 GB de espacio disponible"
        },
        "genero": "Acción, Aventura",
        "precio": 59.99,
        "poster": "https://cdn.akamai.steamstatic.com/steam/apps/2208920/capsule_616x353.jpg?t=1697654233",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 5,
        "nombre": "Far Cry 6",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-4460 / AMD Ryzen 3 1200",
          memoria: "8 GB RAM",
          almacenamiento: "60 GB de espacio disponible"
        },
        "genero": "Acción, Aventura",
        "precio": 49.99,
        "poster": "https://st1.techlusive.in/wp-content/uploads/2022/03/Far-Cry-6.jpg?impolicy=Medium_Widthonly&w=400&h=246",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 6,
        "nombre": "Halo Infinite",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-4440 / AMD Ryzen 5 2600",
          memoria: "8 GB RAM",
          almacenamiento: "50 GB de espacio disponible"
        },
        "genero": "Shooter",
        "precio": 59.99,
        "poster": "https://cdn.akamai.steamstatic.com/steam/apps/1708091/capsule_616x353.jpg?t=1678215688",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 7,
        "nombre": "The Last of Us Part II",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-3470 / AMD Ryzen 3 1200",
          memoria: "8 GB RAM",
          almacenamiento: "100 GB de espacio disponible"
        },
        
        "genero": "Acción, Aventura",
        "precio": 49.99,
        "poster": "data:image/jpeg;base64,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",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 8,
        "nombre": "Ghost of Tsushima",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-2500K / AMD Ryzen 5 2600",
          memoria: "8 GB RAM",
          almacenamiento: "50 GB de espacio disponible"
        },
        "genero": "Acción, Aventura",
        "precio": 59.99,
        "poster": "https://media.tycsports.com/files/2021/06/22/297511/ghost-of-tsushima_862x485.jpg",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 9,
        "nombre": "Death Stranding",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-3470 / AMD Ryzen 3 1200",
          memoria: "8 GB RAM",
          almacenamiento: "80 GB de espacio disponible"
        },
        "genero": "Aventura, Acción",
        "precio": 39.99,
        "poster": "https://cdn.akamai.steamstatic.com/steam/apps/1850570/header.jpg?t=1700566729",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 10,
        "nombre": "Hades",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5",
          memoria: "8 GB RAM",
          almacenamiento: "20 GB de espacio disponible"
        },
        "genero": "Roguelike, Acción",
        "precio": 24.99,
        "poster": "https://miro.medium.com/v2/resize:fit:616/1*uZ48G72d0THztsPgJELAzg.jpeg",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 11,
        "nombre": "DOOM Eternal",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-9600K / AMD Ryzen 5 3600",
          memoria: "8 GB RAM",
          almacenamiento: "50 GB de espacio disponible"
        },
        "genero": "Shooter",
        "precio": 59.99,
        "poster": "https://static.voidu.com/cdn-cgi/image/format=auto,width=auto,quality=75/images/thumbs/0140308_doom-eternal-steam.jpeg",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 12,
        "nombre": "Animal Crossing: New Horizons",
        "requisitos": {
          requerimientos_CPU: "Nintendo Switch",
          memoria: "4 GB RAM",
          almacenamiento: "6.2 GB de espacio disponible"
        },
        "genero": "Simulación, Social",
        "precio": 59.99,
        "poster": "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/4128af1c3d6761cd2a7b902d63c633be.png",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 13,
        "nombre": "Super Mario Odyssey",
        "requisitos": {
          requerimientos_CPU: "Nintendo Switch",
          memoria: "4 GB RAM",
          almacenamiento: "5.7 GB de espacio disponible"
        },
        "genero": "Plataforma, Aventura",
        "precio": 49.99,
        "poster": "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2018/09/super_mario_odyssey-19.jpg",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 14,
        "nombre": "Horizon Zero Dawn",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-2500K / AMD FX 6300",
          memoria: "8 GB RAM",
          almacenamiento: "100 GB de espacio disponible"
        },
        "genero": "Acción, Aventura",
        "precio": 49.99,
        "poster": "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/capsule_616x353.jpg?t=1698159193",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 15,
        "nombre": "Control",
        "requisitos": {
          requerimientos_CPU: "Intel Core i5-4690 / AMD FX 4350",
          memoria: "8 GB RAM",
          almacenamiento: "42 GB de espacio disponible"
        },
        "genero": "Acción, Aventura",
        "precio": 39.99,
        "poster": "https://505games.com/wp-content/uploads/2021/02/control-r.jpg",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      },
      {
        "id": 16,
        "nombre": "Minecraft",
        "requisitos": {
          requerimientos_CPU: "Intel Core i3-3210 / AMD A8-7600 APU",
          memoria: "4 GB RAM",
          almacenamiento: "1 GB de espacio disponible"
        },
        "genero": "Sandbox, Aventura",
        "precio": 26.95,
        "poster": "https://gaming-cdn.com/images/products/3301/orig/minecraft-master-collection-xbox-one-master-collection-xbox-one-game-microsoft-store-cover.jpg?v=1666109168",
        "background": "https://www.digitaltrends.com/wp-content/uploads/2018/10/red-dead-redemption-2-review-feature-header.jpg?p=1"
      }
  
    ];

    this.game = this.games.find(e => e.id == this.activatadRoute.snapshot.params['id'])
    
  }

}
