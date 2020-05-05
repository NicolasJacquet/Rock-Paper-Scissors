// @flow
import * as React from "react";
import Bubble from "./../bubble";
import { ATTACKS } from "./../../utils/attacks.js";
import { type OnSelectAttackType } from "./../game";
import AttackButton from "./../attack-button";
import css from "./style.module.scss";

type Props = $ReadOnly<{
    onSelectAttack: OnSelectAttackType,
}>;

const AttackSelector = ({ onSelectAttack }: Props): React.Node => {
    return (
        <div className={css.container}>
            {Object.keys(ATTACKS).map((attack) => {
                return (
                    <AttackButton
                        onClick={() => onSelectAttack(attack)}
                        key={attack}
                        title={ATTACKS[attack].label}
                    >
                        <Bubble small attack={attack} />
                    </AttackButton>
                );
            })}
        </div>
    );
};

export default AttackSelector;
