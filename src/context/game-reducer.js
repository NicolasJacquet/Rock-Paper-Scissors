// @flow
import { INCREMENT, DECREMENT, type Action } from "./game-action-types";

type State = { score: number };

const gameReducer = (state: State, action: Action) => {
    switch (action.type) {
        case INCREMENT: {
            return { score: state.score + 1 };
        }
        case DECREMENT: {
            return { score: state.score - 1 };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export type { State };
export default gameReducer;
