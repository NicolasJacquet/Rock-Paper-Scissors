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
    gameResult: string,
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
        gameResult === "win"
            ? "YOU WIN"
            : gameResult === "lose"
            ? "YOU LOSE"
            : "DRAW";

    return (
        <div className={css.container}>
            <div
                className={classnames(css.attackItem, {
                    [css.winner]: gameResult === "win",
                })}
            >
                <h2 className={css.title}>YOU PICKED</h2>
                {gameResult === "win" ? (
                    <Bounce>
                        <Bubble attack={userAttack} />
                    </Bounce>
                ) : gameResult === "draw" ? (
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
                    [css.winner]: gameResult === "lose",
                })}
            >
                <h2 className={css.title}>THE HOUSE PICKED</h2>
                {gameResult === "lose" ? (
                    <Bounce>
                        <Bubble attack={computerAttack} />
                    </Bounce>
                ) : gameResult === "draw" ? (
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
