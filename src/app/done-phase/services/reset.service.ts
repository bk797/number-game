import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  value: Subject<boolean> = new Subject();

  constructor() { }

  setValue(newValue: boolean) {
    this.value.next(newValue);
  }

  getValues(): Subject<boolean> {
    return this.value;
  }

}
