// @flow
import {
    INCREMENT,
    DECREMENT,
    SET_RESULT,
    SET_COMPUTER_ATTACK,
    SET_USER_ATTACK,
    RESTART_GAME,
    type Action,
} from "./game-action-types";
import { type Attack } from "./../utils/attacks";

type State = {|
    score: number,
    result?: number,
    computerAttack?: Attack,
    userAttack?: Attack,
|};

const initialState: State = {
    score: 0,
};

const gameReducer = (state: State, action: Action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                score: state.score + 1,
            };
        }
        case DECREMENT: {
            return {
                ...state,
                score: state.score - 1,
            };
        }
        case SET_USER_ATTACK:
            return {
                ...state,
                userAttack: action.payload,
            };
        case SET_COMPUTER_ATTACK:
            return {
                ...state,
                computerAttack: action.payload,
            };
        case SET_RESULT:
            return {
                ...state,
                result: action.payload,
            };
        case RESTART_GAME:
            return {
                score: state.score,
            };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export type { State };
export { gameReducer, initialState };
