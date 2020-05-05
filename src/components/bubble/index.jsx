// @flow
import React from "react";
import classnames from "classnames";
import { ATTACKS } from "./../../utils/attacks.js";
import css from "./style.module.scss";

type Props = $ReadOnly<{
    small?: boolean,
    attack: $Keys<typeof ATTACKS>,
}>;

const Bubble = (props: Props) => {
    const { small, attack } = props;

    return (
        <div
            className={classnames(css.container, css[attack], {
                [css.small]: small,
            })}
        >
            <div className={css.content}>
                <img
                    src={ATTACKS[attack].iconSrc}
                    alt={ATTACKS[attack].label}
                    className={css.icon}
                />
            </div>
        </div>
    );
};

export default Bubble;
