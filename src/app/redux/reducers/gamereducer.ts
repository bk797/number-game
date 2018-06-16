import { State } from '../../game-manager/enums/gamestates';

export type Reducer<T> = (state: T, action: Action) => T ;

export interface Action {
    type: any;
    payload?: any;
}

export interface StartGameAction extends Action {
    type: State;
    lowerBound: number;
    upperBound: number;
}

export const gameReducer: Reducer<GameState> = (state: GameState, action: Action) => {
    if (action.type !== state.phase) {
        return state;
    }
    switch (action.type) {
        case State.Prep:
            const lb = (<StartGameAction>action).lowerBound;
            const ub = (<StartGameAction>action).upperBound;
            const tempState = {game: new GameStats(lb, ub)};
            return Object.assign({}, state, tempState);
        default:
            return state;
    }
};

export interface GameState {
    phase: State;
    game: GameStats;
    message: string;
}

export class GameStats {
    currentNumber: number;
    lowerBound: number;
    upperBound: number;
    lastGuess: Responses;
    constructor(lb: number, up: number) {
        this.lowerBound = lb;
        this.upperBound = up;
        const range = up - lb;
        this.currentNumber = Math.trunc(Math.random() * (range) + lb);
    }
}

export enum Responses {
    WIN,
    LOSE,
    OUT_OF_BOUNDS,
    LOW,
    HIGH
}
