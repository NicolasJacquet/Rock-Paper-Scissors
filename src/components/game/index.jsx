// @flow
import * as React from "react";
import Fade from "react-reveal/Fade";
import { ATTACKS } from "./../../utils/attacks.js";
import AttackSelector from "./../attack-selector";
import css from "./style.module.scss";

export type OnSelectAttackType = (attack: $Keys<typeof ATTACKS>) => void;

const Game = (): React.Node => {
    const [userAttack, setUserAttack] = React.useState(null);

    const onSelectAttack: OnSelectAttackType = (attack) => {
        console.log("Attack !", attack);
        setUserAttack(attack);
    };

    return (
        <div className={css.container}>
            <Fade when={!userAttack} duration={800}>
                {!userAttack && (
                    <AttackSelector onSelectAttack={onSelectAttack} />
                )}
            </Fade>
        </div>
    );
};

export default Game;
