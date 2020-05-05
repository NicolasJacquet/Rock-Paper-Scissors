// @flow
import React from "react";
import css from "./style.module.scss";

const ScoreBoard = () => {
    return (
        <div className={css.container}>
            <p className={css.content}>
                <span className={css.label}>SCORE</span>
                <span className={css.score}>12</span>
            </p>
        </div>
    );
};

export default ScoreBoard;
