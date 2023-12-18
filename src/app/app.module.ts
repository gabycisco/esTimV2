import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameFormComponent } from './modules/game/components/game-form/game-form.component';
import { EditGameComponent } from './modules/game/pages/edit-game/edit-game.component';
import { CreateGameComponent } from './modules/game/pages/create-game/create-game.component';
import { GameComponent } from './modules/game/pages/game/game.component';
import { GameListComponent } from './modules/game/pages/game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFormComponent,
    EditGameComponent,
    CreateGameComponent,
    GameComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
