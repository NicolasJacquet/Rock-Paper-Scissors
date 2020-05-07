// @flow
import iconScissors from "./../assets/images/icon-scissors.svg";
import iconPaper from "./../assets/images/icon-paper.svg";
import iconRock from "./../assets/images/icon-rock.svg";

const ATTACKS = Object.freeze({
    PAPER: {
        label: "Paper",
        iconSrc: iconPaper,
        beats: "ROCK",
    },
    SCISSORS: {
        label: "Scissors",
        iconSrc: iconScissors,
        beats: "PAPER",
    },
    ROCK: {
        label: "Rock",
        iconSrc: iconRock,
        beats: "SCISSORS",
    },
});

type Attack = $Keys<typeof ATTACKS>;

export type { Attack };
export default ATTACKS;
