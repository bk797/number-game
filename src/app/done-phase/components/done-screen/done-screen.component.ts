import { Component, OnInit } from '@angular/core';
import { ResetService } from '../../services/reset.service';
import { GameMessagesService } from '../../../game-manager/services/game-messages.service';
import { filter } from 'rxjs/operators';
import { State } from '../../../game-manager/enums/gamestates';
import { Message } from '../../../game-manager/enums/messagetypes';

@Component({
  selector: 'app-done-screen',
  templateUrl: './done-screen.component.html',
  styleUrls: ['./done-screen.component.css']
})
export class DoneScreenComponent implements OnInit {

  message: string;

  constructor(private reS: ResetService, private gmS: GameMessagesService) {}

  ngOnInit() {
    this.listenToMessages();
  }

  listenToMessages() {
    this.gmS.getUpdates()
    .pipe(filter(o => o.phase === State.Done))
    .subscribe(update => {
      switch (update.type) {
        case Message.WIN:
          this.message = `Correct! It took you ${update.values.score} \
          (out of ${update.values.range}) tries to guess ${update.values.number}`;
          break;
        case Message.LOSE:
          this.message = `Whoops! You guessed every number except for ${update.values.number}`;
          break;
        case Message.RESET:
          this.message = null;
          break;
      }
      });
  }



  restartGame() {
    this.reS.setValue(true);
  }

}
