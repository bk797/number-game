import { Action } from '@ngrx/store';
import { Type } from '../../enums/action.enum';

function generateNumber(lowerBound: number, upperBound: number): number {
    const range = upperBound - lowerBound;
    return Math.trunc(Math.random() * (range) + lowerBound);
}

export class Start implements Action {
    readonly type = Type.START;
    public rand: number;

    constructor(public lowerBound: number, public upperBound: number) {
        this.rand = generateNumber(lowerBound, upperBound);
        console.log(`the number is ${this.rand} you cheater`);
    }
}

export class Guess implements Action {
    readonly type = Type.GUESS;

    constructor(public num: number) {
        this.num = Number(num);
    }
}

export class Reset implements Action {
    readonly type = Type.RESTART;
}

export type GameActionUnion = Start | Guess | Reset;
