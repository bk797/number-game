import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayOutputService {

  value: Subject<number> = new Subject();

  constructor() { }

  newValue(newVal: number) {
    this.value.next(newVal);
  }

  getValues(): Subject<number> {
    return this.value;
  }
}
