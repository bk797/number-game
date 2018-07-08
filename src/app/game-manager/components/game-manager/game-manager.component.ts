import { Component, OnInit } from '@angular/core';
import { State } from '../../../enums/state.enum';
import { Store } from '@ngrx/store';

import * as GameActions from '../../../redux/actions/actions';
import { GameStats } from '../../../redux/reducers/game.reducer';
import { isEmpty, isValidNumber } from '../../functions/number.function';
import { emptyInput, invalidRange, invalidNumber } from '../../messages/warning.message';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css']
})

export class GameManagerComponent implements OnInit {

  warningMessage: string;

  state: State;
  banner: string;
  messages: string[];

  gameInfo: GameStats;
  finalMessage: string;

  guess: number;
  lowerBound: number;
  upperBound: number;

  label: string;

  constructor(private store: Store<any>) {
    this.readStore();
    this.addDefaults();
  }

  addDefaults() {
    this.lowerBound = 0;
    this.upperBound = 20;
    this.label = 'Play';
  }

  readStore() {
    this.store.subscribe(gameState => {
      this.state = gameState.game.phase;
      this.reactToState();
      this.messages = gameState.game.message;
      this.gameInfo = gameState.game.game;
    });
  }

  reactToState() {
    switch (this.state) {
      case State.Prep:
        this.setBanner('Choose a range');
        this.setButtonLabel('Play');
        break;
      case State.Play:
        this.setBanner(`Guess a number between ${this.lowerBound} and ${this.upperBound}`);
        this.setButtonLabel('Guess');
        break;
      case State.Done:
        this.setBanner('You Finished');
        this.getGameStats();
        this.setButtonLabel('Play Again');
        break;
      default:
        break;
    }
  }

  setBanner(banner: string) {
    this.banner = banner;
  }

  setButtonLabel(label: string) {
    this.label = label;
  }

  getGameStats() {
     this.finalMessage = `Good Job! The number was ${this.gameInfo.currentNumber}`;
  }

  updateBounds(bounds: number[]) {
    this.lowerBound = bounds[0];
    this.upperBound = bounds[1];
  }

  ngOnInit() {
    this.reactToState();
  }

  startGame() {
    this.store.dispatch(new GameActions.Start(Number(this.lowerBound), Number(this.upperBound)));
  }

  makeGuess() {
    this.store.dispatch(new GameActions.Guess(Number(this.guess)));
  }

  restartGame() {
    this.store.dispatch( new GameActions.Reset());
  }

  readInput() {
    switch (this.state) {
      case State.Prep:
        this.tryToStart();
        break;
      case State.Play:
        this.tryToGuess();
        break;
      case State.Done:
        this.restartGame();
        break;
      default:
        return;
    }
  }

  tryToStart() {
    if (!this.inputsAreFilled()) {
      this.warningMessage = emptyInput();
    }
    if (!this.boundsAreValid()) {
      this.warningMessage = invalidRange(this.lowerBound, this.upperBound);
    } else {
      this.startGame();
      this.warningMessage = undefined;
    }
  }

  inputsAreFilled() {
    return !(isEmpty(this.lowerBound) || isEmpty(this.upperBound));
  }

  boundsAreValid(): boolean {
    if (!(isValidNumber(this.lowerBound)) && isValidNumber(this.upperBound)) {return false; }
    if (this.lowerBound >= this.upperBound) {return false; }
    return true;
  }

  tryToGuess() {
    if (isEmpty(this.guess)) {
      this.warningMessage = emptyInput();
    } else if (!isValidNumber(this.guess)) {
      this.warningMessage = invalidNumber(this.guess);
    } else {
      this.makeGuess();
    }
  }

}
