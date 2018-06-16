import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrepServiceService {
  value$: Subject<number>;

  constructor() {
    this.value$ = new Subject();
  }

  addValue(newVal: number) {
    // this.value.push(newVal);
    this.value$.next(newVal);
  }

  getValues(): Subject<number> {
    return this.value$;
  }
}
