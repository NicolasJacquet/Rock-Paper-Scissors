// @flow
import * as React from "react";
import classnames from "classnames";
import ATTACKS from "./../../utils/attacks.js";
import css from "./style.module.scss";

type Props = $ReadOnly<{
    small?: boolean,
    attack: $Keys<typeof ATTACKS>,
}>;

const Bubble = ({ small, attack }: Props): React.Node => {
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
