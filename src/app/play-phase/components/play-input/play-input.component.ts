import { Component, OnInit } from '@angular/core';
import { PlayOutputService } from '../../services/play-output.service';
import { GameMessagesService } from '../../../game-manager/services/game-messages.service';
import { filter } from 'rxjs/operators';
import { State } from '../../../game-manager/enums/gamestates';
import { Message } from '../../../game-manager/enums/messagetypes';

@Component({
  selector: 'app-play-input',
  templateUrl: './play-input.component.html',
  styleUrls: ['./play-input.component.css']
})
export class PlayInputComponent implements OnInit {

  inputValue: number;
  messages: string[];
  error: string;

  constructor(private pos: PlayOutputService, private gmS: GameMessagesService) { }

  ngOnInit() {
    this.listenToMessages();
  }

  listenToMessages() {
    this.gmS.getUpdates()
    .pipe(filter(o => o.phase === State.Play))
    .subscribe(update => {
      this.error = null;
      switch (update.type) {
        case Message.ERROR:
          this.error = update.values.error;
          break;
        case Message.INCORRECT:
          this.messages.unshift(update.values.message);
          break;
        case Message.RESET:
          this.messages = [];
          break;
      }
    });
  }

  newValue() {
    this.pos.newValue(this.inputValue);
    this.inputValue = null;
  }
}
