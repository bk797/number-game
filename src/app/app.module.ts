import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GameManagerModule } from './game-manager/game-manager.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { gameReducer } from './redux/reducers/game.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GameManagerModule,
    StoreModule.forRoot({game: gameReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
