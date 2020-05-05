// @flow
import React from "react";
import logo from "./../../assets/images/logo.svg";
import ScoreBoard from "./../score-board";
import css from "./style.module.scss";

const Header = () => {
    return (
        <header className={css.container}>
            <h1 className={css.title}>
                <img src={logo} alt='Rock, Paper, Scissors' />
            </h1>
            <ScoreBoard />
        </header>
    );
};

export default Header;
