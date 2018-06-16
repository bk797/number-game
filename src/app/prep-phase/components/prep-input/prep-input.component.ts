import { Component, OnInit } from '@angular/core';
import { PrepServiceService } from '../../services/prep-service/prep-service.service';
import { GameMessagesService } from '../../../game-manager/services/game-messages.service';
import { filter } from 'rxjs/operators';
import { Message } from '../../../game-manager/enums/messagetypes';
import { State } from '../../../game-manager/enums/gamestates';

@Component({
  selector: 'app-prep-input',
  templateUrl: './prep-input.component.html',
  styleUrls: ['./prep-input.component.css']
})
export class PrepInputComponent implements OnInit {

  inputValue: number;
  message: string;

  constructor(private ps: PrepServiceService, private gmS: GameMessagesService) { }

  ngOnInit() {
    this.listenToMessages();
  }

  listenToMessages() {
    this.gmS.getUpdates()
    .pipe(filter(o => o.phase === State.Prep))
    .subscribe(update => {
      switch (update.type) {
        case Message.ERROR:
          this.message = update.values.error;
          break;
        case Message.RESET:
          this.message = null;
          break;
      }
    });
  }

  newValue() {
    this.ps.addValue(this.inputValue);
    this.inputValue = null;
  }

}
