// @flow
import * as React from "react";
import Fade from "react-reveal/Fade";
import { useGame } from "./../../context/game-context";
import {
    INCREMENT,
    DECREMENT,
    SET_RESULT,
    SET_COMPUTER_ATTACK,
    SET_USER_ATTACK,
    RESTART_GAME,
} from "./../../context/game-action-types.js";
import { type Attack } from "./../../utils/attacks.js";
import { getGameResult, getRandomAttack } from "./../../utils/utils.js";
import AttackSelector from "./../attack-selector";
import Results from "./../results";
import css from "./style.module.scss";

const Game = (): React.Node => {
    const {
        state: { score, userAttack },
        dispatch,
    } = useGame();
    const [showResult, setShowResult] = React.useState(false);

    const onSelectAttack = (attack: Attack) => {
        const computerAttack: Attack = getRandomAttack();
        const result: number = getGameResult(attack, computerAttack);

        dispatch({ type: SET_USER_ATTACK, payload: attack });
        dispatch({ type: SET_COMPUTER_ATTACK, payload: computerAttack });
        dispatch({ type: SET_RESULT, payload: result });

        setTimeout(() => {
            if (result > 0) {
                dispatch({ type: INCREMENT });
            } else if (result < 0 && score > 0) {
                dispatch({ type: DECREMENT });
            }
            setShowResult(true);
        }, 700);
    };

    const onRestart = () => {
        setShowResult(false);
        setTimeout(() => {
            dispatch({ type: RESTART_GAME });
        }, 700);
    };

    return (
        <div className={css.container}>
            <Fade when={!userAttack} unmountOnExit duration={700}>
                {!userAttack && (
                    <AttackSelector onSelectAttack={onSelectAttack} />
                )}
            </Fade>
            <Fade unmountOnExit when={showResult} duration={500}>
                {showResult && <Results onRestart={onRestart} />}
            </Fade>
        </div>
    );
};

export default Game;
