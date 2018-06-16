import { Injectable } from '@angular/core';
import { Update } from '../data-types/update';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameMessagesService {

  updates: Subject<Update> = new BehaviorSubject(null);

  constructor() { }

  setUpdate(newUpdate: Update) {
    this.updates.next(newUpdate);
  }

  getUpdates(): Subject<Update> {
    return this.updates;
  }
}
