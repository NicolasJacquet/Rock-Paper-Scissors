// @flow
import iconScissors from "./../assets/images/icon-scissors.svg";
import iconPaper from "./../assets/images/icon-paper.svg";
import iconRock from "./../assets/images/icon-rock.svg";

export const ATTACKS = Object.freeze({
    PAPER: {
        label: "Paper",
        iconSrc: iconPaper,
    },
    SCISSORS: {
        label: "Scissors",
        iconSrc: iconScissors,
    },
    ROCK: {
        label: "Rock",
        iconSrc: iconRock,
    },
});
