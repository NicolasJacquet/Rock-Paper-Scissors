// @flow
import * as React from "react";
import Fade from "react-reveal/Fade";
import { useGame } from "./../../context/game-context";
import { INCREMENT, DECREMENT } from "./../../context/game-action-types.js";
import ATTACKS from "./../../utils/attacks.js";
import { getGameResult, getRandomAttack } from "./../../utils/utils.js";
import AttackSelector from "./../attack-selector";
import Results from "./../results";
import css from "./style.module.scss";

export type OnSelectAttackType = (attack: $Keys<typeof ATTACKS>) => void;

const Game = (): React.Node => {
    const { state, dispatch } = useGame();
    const [userAttack, setUserAttack] = React.useState(null);
    const [computerAttack, setComputerAttack] = React.useState(null);
    const [showResult, setShowResult] = React.useState(false);
    const [gameResult, setGameResult] = React.useState(0);

    const onSelectAttack: OnSelectAttackType = (attack) => {
        const computerAttack = getRandomAttack();
        const result = getGameResult(attack, computerAttack);
        setUserAttack(attack);
        setComputerAttack(computerAttack);
        setGameResult(result);
        setTimeout(() => {
            if (result > 0) {
                dispatch({ type: INCREMENT });
            } else if (result < 0 && state.score > 0) {
                dispatch({ type: DECREMENT });
            }
            setShowResult(true);
        }, 700);
    };

    const onRestart = () => {
        setShowResult(false);
        setTimeout(() => {
            setUserAttack(null);
            setComputerAttack(null);
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
                {showResult && (
                    <Results
                        computerAttack={computerAttack}
                        userAttack={userAttack}
                        gameResult={gameResult}
                        onRestart={onRestart}
                    />
                )}
            </Fade>
        </div>
    );
};

export default Game;
