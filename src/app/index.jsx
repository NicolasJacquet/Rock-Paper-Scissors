// @flow
import React from "react";
import css from "./app.module.scss";

const App = () => {
    return (
        <div className={css.app}>
            <div className={css.content}>Rock, Paper, Scissors</div>
        </div>
    );
};

export default App;
