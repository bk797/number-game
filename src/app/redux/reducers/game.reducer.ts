import { State } from '../../enums/state.enum';
import { Type } from '../../enums/action.enum';
import { GameActionUnion, Start, Guess } from '../actions/actions';
import { Action } from '@ngrx/store';
import { tooHigh, tooLow, outOfBounds } from '../messages/message';
import { Response } from '../../enums/response.enum';

type Reducer<T> = (state: T, action: Action) => T ;

const DEFAULT_STATE: GameState  = {phase: State.Prep, game: null, message: []};

export const gameReducer: Reducer<GameState> = (state: GameState, action: GameActionUnion) => {
    if (state === undefined) {
        return DEFAULT_STATE;
    }
    switch (action.type) {
        case Type.START:
            if (state.phase === State.Prep) {
                const lb = (<Start>action).lowerBound;
                const ub = (<Start>action).upperBound;
                const num = (<Start>action).rand;
                if (validInputs(lb, ub, num)) {
                    const tempState = {phase: State.Play, game: newGame(lb, ub, num)};
                    return Object.assign({}, state, tempState);
                }
                return state;
            }
            return state;
        case Type.GUESS:
            if (state.phase === State.Play) {
                const num: number = (<Guess>action).num;
                const resp: Response = getResponse(state.game, num);
                let newMessages = {};
                switch (resp) {
                    case Response.HIGH:
                        newMessages = {message: state.message.concat(tooHigh(num))};
                        return Object.assign({}, state, newMessages);
                    case Response.LOW:
                        newMessages = {message: state.message.concat(tooLow(num))};
                        return Object.assign({}, state, newMessages);
                    case Response.OUT_OF_BOUNDS:
                        newMessages = {message: state.message.concat(
                            outOfBounds(state.game.lowerBound, state.game.upperBound, num))};
                            return Object.assign({}, state, newMessages);
                    case Response.WIN:
                        const newPhase = {phase: State.Done };
                        return Object.assign({}, state, newPhase);
                    default:
                        return state;
                    }
            }
            // run through a reducer for gamestate
            // then look at response and set message and phase accordingly
            return state;
        case Type.RESTART:
            return DEFAULT_STATE;
        default:
            return state;
    }
};

function getResponse (game: GameStats, guess: number): Response {
    if (!validInputs(game.lowerBound, game.upperBound, guess)) {return Response.OUT_OF_BOUNDS; }
    if (game.currentNumber === guess) {return Response.WIN; }
    if (game.currentNumber < guess) {return Response.HIGH; }
    if (game.currentNumber > guess) {return Response.LOW; }
    return Response.NONE;
}

function validInputs(lb: number, ub: number, num: number): boolean {
    return lb <= num && num <= ub;
}

function newGame(lb: number, ub: number, num: number): GameStats {
    return {
        currentNumber: num,
        lowerBound: lb,
        upperBound: ub,
        lastGuess: Response.NONE,
        guesses: 0
    };
}


export interface GameState {
    phase: State;
    game: GameStats;
    message: string[];
}

export interface GameStats {
    currentNumber: number;
    lowerBound: number;
    upperBound: number;
    lastGuess: Response;
    guesses: number;
}
