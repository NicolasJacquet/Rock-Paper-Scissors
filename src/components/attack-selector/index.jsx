// @flow
import React from "react";
import Bubble from "./../bubble";
import { ATTACKS } from "./../../utils/attacks.js";
import css from "./style.module.scss";

const AttackSelector = () => {
    return (
        <div className={css.container}>
            {Object.keys(ATTACKS).map((attack) => {
                return (
                    <button className={css.button}>
                        <Bubble small attack={attack} />
                    </button>
                );
            })}
        </div>
    );
};

export default AttackSelector;
