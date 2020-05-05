// @flow
import React from "react";
import Header from "./../components/header";
import Rules from "./../components/rules";
import css from "./style.module.scss";

const App = () => {
    return (
        <div className={css.app}>
            <div className={css.content}>
                <Header />
                <Rules />
            </div>
        </div>
    );
};

export default App;
