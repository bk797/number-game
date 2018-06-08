import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrepServiceService {
  // value: number[] = [];
  value: number;

  constructor() {}

  addValue(newVal: number) {
    // this.value.push(newVal);
    this.value = newVal;
    console.log('value added');
  }

  getValues(): Observable<number> {
    return of(this.value);
  }
}
