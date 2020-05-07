// @flow
import * as React from "react";
import { useGame } from "./../../context/game-context";
import Tada from "react-reveal/Tada";
import css from "./style.module.scss";

const ScoreBoard = (): React.Node => {
    const {
        state: { score },
    } = useGame();

    return (
        <div className={css.container}>
            <p className={css.content}>
                <span className={css.label}>SCORE</span>
                <Tada spy={score}>
                    <span className={css.score}>{score}</span>
                </Tada>
            </p>
        </div>
    );
};

export default ScoreBoard;
