// @flow
import * as React from "react";
import { useGame } from "./../../context/game-context";
import css from "./style.module.scss";

const ScoreBoard = (): React.Node => {
    const { state } = useGame();

    return (
        <div className={css.container}>
            <p className={css.content}>
                <span className={css.label}>SCORE</span>
                <span className={css.score}>{state.score}</span>
            </p>
        </div>
    );
};

export default ScoreBoard;
