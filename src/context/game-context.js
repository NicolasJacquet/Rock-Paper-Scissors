// @flow
import * as React from "react";
import { type Action } from "./game-action-types";
import { gameReducer, initialState, type State } from "./game-reducer";

type Dispatch = (action: Action) => void;
type StateProviderProps = { children: React.Node };

const GameStateContext = React.createContext<State | typeof undefined>(
    undefined
);
const GameDispatchContext = React.createContext<Dispatch | typeof undefined>(
    undefined
);

const GameProvider = ({ children }: StateProviderProps) => {
    const [state, dispatch] = React.useReducer(gameReducer, initialState);
    const { score } = state;

    React.useEffect(() => {
        window.localStorage.setItem("score", JSON.stringify(score));
    }, [score]);

    return (
        <GameStateContext.Provider value={state}>
            <GameDispatchContext.Provider value={dispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameStateContext.Provider>
    );
};

const useGameState = () => {
    const context = React.useContext(GameStateContext);
    if (context === undefined) {
        throw new Error("useGameState must be used within a GameProvider");
    }
    return context;
};

const useGameDispatch = () => {
    const context = React.useContext(GameDispatchContext);
    if (context === undefined) {
        throw new Error("useGameDispatch must be used within a GameProvider");
    }
    return context;
};

const useGame = () => {
    return { state: useGameState(), dispatch: useGameDispatch() };
};

export { GameProvider, useGame };
