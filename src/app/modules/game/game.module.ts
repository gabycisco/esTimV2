import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule }    from './game-routing.module';
import { GameFormComponent }    from './components/game-form/game-form.component';
import { CreateGameComponent }  from './pages/create-game/create-game.component';
import { EditGameComponent }    from './pages/edit-game/edit-game.component';
import { GameListComponent }    from './pages/game-list/game-list.component';
import { GameComponent }        from './pages/game/game.component';


@NgModule({
  declarations: [
    GameFormComponent,
    EditGameComponent,
    CreateGameComponent,
    GameComponent,
    GameListComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
