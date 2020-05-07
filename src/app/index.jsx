// @flow
import React from "react";
import { GameProvider } from "./../context/game-context";
import Header from "./../components/header";
import Rules from "./../components/rules";
import Game from "./../components/game";
import css from "./style.module.scss";

const App = () => {
    return (
        <GameProvider>
            <div className={css.app}>
                <div className={css.content}>
                    <Header />
                    <Game />
                    <Rules />
                </div>
            </div>
        </GameProvider>
    );
};

export default App;
