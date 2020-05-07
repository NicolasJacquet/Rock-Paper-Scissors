// @flow
import * as React from "react";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Shake from "react-reveal/Shake";
import { useGame } from "./../../context/game-context";
import { type Attack } from "./../../utils/attacks.js";
import Bubble from "./../bubble";
import classnames from "classnames";
import css from "./style.module.scss";

type Props = $ReadOnly<{
    onRestart: () => void,
}>;

type ItemProps = {
    isWinner: boolean,
    isDraw: boolean,
    attack: Attack,
    title: string,
};

const Item = ({ isWinner, isDraw, attack, title }: ItemProps): React.Node => {
    return (
        <div
            className={classnames(css.attackItem, {
                [css.winner]: isWinner,
            })}
        >
            <h2 className={css.title}>{title}</h2>
            {isWinner ? (
                <Bounce>
                    <Bubble attack={attack} />
                </Bounce>
            ) : isDraw ? (
                <Shake>
                    <Bubble attack={attack} />
                </Shake>
            ) : (
                <Bubble attack={attack} />
            )}
        </div>
    );
};

const Results = ({ onRestart }: Props): React.Node => {
    const {
        state: { result, computerAttack, userAttack },
    } = useGame();

    if (!computerAttack || !userAttack || typeof result === "undefined") {
        return null;
    }

    const text = result > 0 ? "YOU WIN" : result < 0 ? "YOU LOSE" : "DRAW";

    return (
        <div className={css.container}>
            <Item
                isWinner={result > 0}
                isDraw={result === 0}
                attack={userAttack}
                title='YOU PICKED'
            />
            <Zoom delay={400}>
                <div className={css.actionContainer}>
                    <p className={css.text}>{text}</p>
                    <button onClick={() => onRestart()} className={css.btn}>
                        PLAY AGAIN
                    </button>
                </div>
            </Zoom>
            <Item
                isWinner={result < 0}
                isDraw={result === 0}
                attack={userAttack}
                title='THE HOUSE PICKED'
            />
        </div>
    );
};

export default Results;
