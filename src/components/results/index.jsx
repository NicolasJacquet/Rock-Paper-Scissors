// @flow
import * as React from "react";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Shake from "react-reveal/Shake";
import Bubble from "./../bubble";
import ATTACKS from "./../../utils/attacks.js";
import classnames from "classnames";
import css from "./style.module.scss";

type Props = $ReadOnly<{
    computerAttack: ?$Keys<typeof ATTACKS>,
    userAttack: ?$Keys<typeof ATTACKS>,
    gameResult: number,
    onRestart: () => void,
}>;

const Results = ({
    computerAttack,
    userAttack,
    onRestart,
    gameResult,
}: Props): React.Node => {
    if (!computerAttack || !userAttack) {
        return null;
    }

    const text =
        gameResult > 0 ? "YOU WIN" : gameResult < 0 ? "YOU LOSE" : "DRAW";

    return (
        <div className={css.container}>
            <div
                className={classnames(css.attackItem, {
                    [css.winner]: gameResult > 0,
                })}
            >
                <h2 className={css.title}>YOU PICKED</h2>
                {gameResult > 0 ? (
                    <Bounce>
                        <Bubble attack={userAttack} />
                    </Bounce>
                ) : gameResult === 0 ? (
                    <Shake>
                        <Bubble attack={userAttack} />
                    </Shake>
                ) : (
                    <Bubble attack={userAttack} />
                )}
            </div>
            <Zoom delay={400}>
                <div className={css.actionContainer}>
                    <p className={css.text}>{text}</p>
                    <button onClick={() => onRestart()} className={css.btn}>
                        PLAY AGAIN
                    </button>
                </div>
            </Zoom>
            <div
                className={classnames(css.attackItem, {
                    [css.winner]: gameResult < 0,
                })}
            >
                <h2 className={css.title}>THE HOUSE PICKED</h2>
                {gameResult < 0 ? (
                    <Bounce>
                        <Bubble attack={computerAttack} />
                    </Bounce>
                ) : gameResult === 0 ? (
                    <Shake>
                        <Bubble attack={computerAttack} />
                    </Shake>
                ) : (
                    <Bubble attack={computerAttack} />
                )}
            </div>
        </div>
    );
};

export default Results;
