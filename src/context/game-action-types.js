// @flow
import { type Attack } from "./../utils/attacks";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_RESULT = "SET_RESULT";
const SET_COMPUTER_ATTACK = "SET_COMPUTER_ATTACK";
const SET_USER_ATTACK = "SET_USER_ATTACK";
const RESTART_GAME = "SET_DEFAULT";

type Action =
    | {| type: typeof INCREMENT |}
    | {| type: typeof DECREMENT |}
    | {| type: typeof RESTART_GAME |}
    | {| type: typeof SET_RESULT, payload: number |}
    | {| type: typeof SET_COMPUTER_ATTACK, payload: Attack |}
    | {| type: typeof SET_USER_ATTACK, payload: Attack |};

export type { Action };
export {
    INCREMENT,
    DECREMENT,
    SET_RESULT,
    SET_COMPUTER_ATTACK,
    SET_USER_ATTACK,
    RESTART_GAME,
};
