import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule }    from './game-routing.module';
import { GameFormComponent }    from './components/game-form/game-form.component';
import { CreateGameComponent }  from './pages/create-game/create-game.component';
import { EditGameComponent }    from './pages/edit-game/edit-game.component';
import { GameListComponent }    from './pages/game-list/game-list.component';
import { GameComponent }        from './pages/game/game.component';
import { HighlightItemDirective } from 'src/app/highlight-item.directive';
import { ArreglarGuionesPipe } from 'src/app/pipes/arreglar-guiones.pipe';
import { OrdenarPreciosPipe } from 'src/app/pipes/ordenar-precios.pipe';
import { BuyGameComponent } from './pages/buy-game/buy-game.component';
import { BuyGameFormComponent } from './components/buy-game-form/buy-game-form.component';


@NgModule({
  declarations: [
    GameFormComponent,
    EditGameComponent,
    CreateGameComponent,
    GameComponent,
    GameListComponent,
    HighlightItemDirective,
    ArreglarGuionesPipe,
    OrdenarPreciosPipe,
    BuyGameComponent,
    BuyGameFormComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
