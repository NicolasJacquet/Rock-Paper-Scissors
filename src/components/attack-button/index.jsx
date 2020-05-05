// @flow
import * as React from "react";
import classnames from "classnames";
import css from "./style.module.scss";

type BaseProps = React.ElementConfig<"button">;

type Props = $ReadOnly<{
    ...BaseProps,
    children: React.Node,
}>;

const AttackButton = ({ children, onClick, ...props }: Props): React.Node => {
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            onClick();
        }, 200);
    };

    return (
        <button
            {...props}
            onClick={handleClick}
            className={classnames(css.button, { [css.clicked]: isClicked })}
            disabled={isClicked}
        >
            {children}
        </button>
    );
};

export default AttackButton;
