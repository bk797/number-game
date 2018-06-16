import { Component, OnInit } from '@angular/core';
import { State } from '../../enums/gamestates';
import { PrepServiceService } from '../../../prep-phase/services/prep-service/prep-service.service';
import { filter } from 'rxjs/operators';
import { PlayOutputService } from '../../../play-phase/services/play-output.service';
import { ResetService } from '../../../done-phase/services/reset.service';
import { GameMessagesService } from '../../services/game-messages.service';
import { Message } from '../../enums/messagetypes';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css']
})
export class GameManagerComponent implements OnInit {

  state = State;
  currentState: State;
  cardTitle: String;
  chosenNumber: number;
  range: number;
  guesses: number;

  constructor(
    private gmS: GameMessagesService,
    private roS: ResetService,
    private prepS: PrepServiceService,
    private poS: PlayOutputService
  ) {}

  ngOnInit() {
    this.setTitle(State.Prep);
    this.listenForChanges();
  }

  listenForChanges() {
    this.prepS.getValues()
    .pipe(filter(value => this.currentState === State.Prep))
    .subscribe(value => {
      if (this.isValidNumber(value)) {
        this.range = value;
        this.chosenNumber = Math.trunc(Math.random() * value + 1);
        this.guesses = 0;
        this.setTitle(State.Play);
        console.log(this.chosenNumber);
      } else {
        this.sendMessage(Message.ERROR, {error: 'Please give a positive number'});
      }
    });
    this.poS.getValues()
    .pipe(filter(value => this.currentState === State.Play))
    .subscribe(value => {
      value = Number(value);
      this.guesses++;
      if (!this.isValidNumber(value)) {
        this.sendMessage(Message.ERROR, {error: 'Please give a positive number'});
      } else if (!this.inRange(value)) {
        this.sendMessage(Message.ERROR, {error: `Please choose a number between 1 and ${this.range} `});
      } else if (value !== this.chosenNumber) {
        if (this.guesses === this.range - 1) {
          this.setTitle(State.Done);
          this.sendMessage(Message.LOSE, {number: this.chosenNumber});
        } else if (value < this.chosenNumber) {
          this.sendMessage(Message.INCORRECT, {message: `${value} is too small`});
        } else if (value > this.chosenNumber) {
        this.sendMessage(Message.INCORRECT, {message: `${value} is too large`});
        }
      } else {
        this.setTitle(State.Done);
        this.sendMessage(Message.WIN, {number: this.chosenNumber, score: this.guesses, range: this.range});
      }
    });
    this.roS.getValues()
    .pipe(filter(value => this.currentState === State.Done))
    .subscribe(value => {
      this.setTitle(State.Prep);
    });
  }

  sendMessage(mType: Message, mVals: any) {
    this.gmS.setUpdate({phase: this.currentState, type: mType, values: mVals});
  }

  inRange(value: number): boolean {
    return value <= this.range;
  }

  isValidNumber(value: number): boolean {
    return value > 0;
  }

  setTitle(newState: State) {
    this.currentState = newState;
    this.sendMessage(Message.RESET, {});
    switch (this.currentState) {
      case State.Prep:
        this.cardTitle = 'Choose a range 1 - ?';
        break;
    case State.Play:
      this.cardTitle = 'Guess the number';
      break;
    case State.Done:
      this.cardTitle = 'Game Over';
      break;
    }
  }

}
